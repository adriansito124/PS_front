import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-station',
  imports: [],
  templateUrl: './station.html',
  styleUrl: './station.scss'
})
export class Station {
  @Input() name: string = "teste"
}
