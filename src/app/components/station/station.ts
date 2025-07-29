import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-station',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './station.html',
  styleUrls: ['./station.scss']
})
export class Station {
  constructor(private router: Router) {}

  gotoStation() {
    this.router.navigate(['/station']);
  }

  @Input() name_station: string = 'teste';
  @Input() serialnumber: string = '1234';

  showModal = false;

  abrirModal() {
    this.showModal = true;
  }

  fecharModal() {
    this.showModal = false;
  }
}
