import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Station } from '../../components/station/station';
import { FirstStation } from '../../components/first-station/first-station';
import { CommonModule } from '@angular/common';

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
}
