import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Station } from '../../components/station/station';
import { FirstStation } from '../../components/first-station/first-station';
import { CommonModule } from '@angular/common';
import { IStation, StationService } from '../../services/station.service';
import { error } from 'console';

@Component({
  selector: 'app-home',
  imports: [Station, FirstStation, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  serialnumber: string = "123"
  showModalNewStation: boolean = false;

  fecharModalNewStation() {
    this.showModalNewStation = false;
  }

  abrirModalNewStation() {
    this.showModalNewStation = true;
  }
  stations: IStation[] = [];

  constructor(
    private stationService: StationService
  ) { }

  ngOnInit(): void {
    this.loadStations();
  }

  loadStations() {
    this.stationService.getAll().subscribe({
      next: res => {
        this.stations = res as IStation[]
        console.log(this.stations)
      },
      error: err => {
        console.error(err);
      }
    })
  }
}
