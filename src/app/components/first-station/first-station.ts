import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-station',
  imports: [CommonModule],
  templateUrl: './first-station.html',
  styleUrl: './first-station.scss'
})
export class FirstStation {
  constructor(private router: Router) {}

  @Input() name_station: string = "teste"
  
  gotoStation() {
    this.router.navigate(['/station']);
  }
}
