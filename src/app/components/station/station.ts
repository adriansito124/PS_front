import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  ICreateStation,
  IRegister,
  IUpdateStation,
  StationService,
} from '../../services/station.service';
import { EResult, ICreatePart, PartService } from '../../services/part.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-station',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './station.html',
  styleUrls: ['./station.scss'],
})
export class Station {
  constructor(
    private router: Router,
    private partService: PartService,
    private stationService: StationService
  ) {}

  gotoStation() {
    this.router.navigate(['/station']);
  }

  @Input() index: number = 0;
  @Input() name_station: string = 'teste';
  @Input() serialnumber: string = '1234';
  @Input() registers: IRegister[] = [];
  @Input() stationId: string = '';
  @Input() totalStations: number = 1;

  selectedSerial: string = '';

  showModalAdd: boolean = false;
  showModalEdit: boolean = false;
  showModalDelete: boolean = false;

  editedName: string = '';
  editedIndex: number = 0;

  abrirModalAdd() {
    this.showModalAdd = true;
  }

  fecharModalAdd() {
    this.showModalAdd = false;
  }

  abrirModalEditStation() {
    this.showModalEdit = true;
  }

  fecharModalEditStation() {
    this.showModalEdit = false;
  }

  abrirModalDelete() {
    this.showModalDelete = true;
  }

  fecharModalDelete() {
    this.showModalDelete = false;
  }

  deletarEstacao() {
    if (!this.stationId) {
      console.warn('StationId ausente');
      return;
    }

    this.stationService.deleteStation(this.stationId).subscribe({
      next: () => {
        console.log('Estação deletada com sucesso');
        this.fecharModalDelete();
      },
      error: (err) => {
        console.error('Erro ao deletar estação:', err);
      },
    });
  }

  editarEstacao() {
    if (!this.stationId) {
      console.warn('StationId ausente');
      return;
    }

    const payload: IUpdateStation = {
      name: this.editedName,
    };

    this.stationService.updateStation(this.stationId, payload).subscribe({
      next: () => {
        console.log('Estação editada com sucesso');
        this.name_station = this.editedName;
        this.fecharModalEditStation();
      },
      error: (err) => {
        console.error('Erro ao editar estação:', err);
      },
    });
  }

  adicionarNovaPeca() {
    if (!this.selectedSerial || !this.stationId) {
      console.warn('Serial ou stationId ausente');
      return;
    }

    const payload: ICreatePart = {
      SerialNumber: this.selectedSerial,
      StationId: this.stationId,
    };

    this.partService.createPart(payload).subscribe({
      next: () => {
        console.log('Peça adicionada com sucesso');
        const isUltimaEstacao = this.index === this.totalStations - 1;

        if (isUltimaEstacao) {
          this.partService
            .updateStatus(this.selectedSerial, EResult.FINISHED)
            .subscribe({
              next: () => console.log('Status atualizado para FINALIZADO'),
              error: (err) => console.error('Erro ao atualizar status:', err),
            });
        }
        this.selectedSerial = '';
        this.fecharModalAdd();
      },
      error: (err) => {
        console.error('Erro ao criar peça:', err);
      },
    });
  }
}
