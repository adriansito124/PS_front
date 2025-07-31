import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Station } from '../../components/station/station';
import { FirstStation } from '../../components/first-station/first-station';
import { IStation, StationService } from '../../services/station.service';
import { error } from 'console';

@Component({
  selector: 'app-home',
  imports: [Header, Station, FirstStation],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  serialnumber: string = "123"
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
