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

  showModalEdit: boolean = false;
  showModalDelete: boolean = false;
  showModalNewPart: boolean = false;

  @Input() name_station: string = "teste"

  gotoStation() {
    this.router.navigate(['/station']);
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
}
