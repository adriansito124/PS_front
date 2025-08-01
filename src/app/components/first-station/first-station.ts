import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IRegister, StationService } from '../../services/station.service';
import { PartService, ICreatePart } from '../../services/part.service';
import { FormsModule } from '@angular/forms';
import { ICreateRegister, RegisterService } from '../../services/register.service';



@Component({
  selector: 'app-first-station',
  imports: [CommonModule, FormsModule],
  templateUrl: './first-station.html',
  styleUrls: ['./first-station.scss']
})
export class FirstStation {
  constructor(private router: Router, private partService: PartService, private registerService: RegisterService,
    private stationService: StationService
  ) { }

  showModalEdit: boolean = false;
  showModalDelete: boolean = false;
  showModalNewPart: boolean = false;

  @Input() name_station: string = "teste"
  @Input() serialnumber: string = '';
  @Input() registers: IRegister[] = [];
  @Input() stationId: string = '';
  @Input() index!: number;

  newSerial: string = '';

  gotoStation() {
    this.router.navigate(['/station', this.stationId]);
    console.log(this.index)
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

  abrirModalNewPart() {
    this.showModalNewPart = true;
  }

  fecharModalNewPart() {
    this.showModalNewPart = false;
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


  adicionarNovaPeca() {

    console.log(this.serialnumber)
    const payload: ICreateRegister = {
      serialNumber: this.newSerial,
    };
    this.registerService.createRegister(this.stationId, payload).subscribe({
      next: () => {
        this.newSerial = '';
        this.fecharModalNewPart();

        window.location.reload();
      },
      error: (err) => {
        console.error('Erro ao criar peça:', err);
      },
    });
  }

}
