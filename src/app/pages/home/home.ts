import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Station } from '../../components/station/station';
import { FirstStation } from '../../components/first-station/first-station';

@Component({
  selector: 'app-home',
  imports: [Header, Station, FirstStation],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  serialnumber: string = "123"
}
