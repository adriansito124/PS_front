import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Station } from '../../components/station/station';
import { FirstStation } from '../../components/first-station/first-station';
import { CommonModule } from '@angular/common';
import { IStation, StationService } from '../../services/station.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [Station, FirstStation, CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  serialnumber: string = "123";  
  showModalNewStation: boolean = false;
  newStationName: string = '';
  newStationIndex!: number;
  stations: IStation[] = [];

  constructor(private stationService: StationService) {}

  ngOnInit(): void {
    this.loadStations();
  }

  loadStations() {
    this.stationService.getAll().subscribe({
      next: res => {
        this.stations = res as IStation[];
        console.log('Estações carregadas:', this.stations);
      },
      error: err => {
        console.error('Erro ao carregar estações:', err);
      }
    });
  }

  abrirModalNewStation() {
    this.newStationName = '';
    this.newStationIndex = undefined!;
    this.showModalNewStation = true;
  }

  fecharModalNewStation() {
    this.showModalNewStation = false;
  }

  addNewStation() {
    const name = this.newStationName.trim();
    const index = this.newStationIndex;

    if (!name) {
      alert('Digite o nome da estação');
      return;
    }

    if (!index || index < 1 || index > 3) {
      alert('O número da posição deve ser entre 1 e 3');
      return;
    }

    if (this.stations.some(s => s.index === index)) {
      alert(`Já existe uma estação na posição ${index}`);
      return;
    }

    if (this.stations.length >= 3) {
      alert('Limite máximo de 3 estações atingido');
      return;
    }

    this.stationService.createStation({ name, index }).subscribe({
      next: (station) => {
        this.fecharModalNewStation();
        this.loadStations();
        alert(`Estação "${station.name}" criada na posição ${station.index} com sucesso!`);
      },
      error: (err) => {
        console.error('Erro ao criar estação:', err);
        alert('Erro ao criar estação. Tente novamente.');
      }
    });
  }
}
