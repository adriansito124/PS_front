import { Component, Input } from '@angular/core';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-view-station',
  standalone: true,
  imports: [Header],
  templateUrl: './view-station.html',
  styleUrl: './view-station.scss'
})
export class ViewStation {
  @Input() name_station: string = 'Estação 1';
}
