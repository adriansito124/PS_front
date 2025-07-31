import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IRegister } from '../../services/station.service';

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
  @Input() registers: IRegister[] = [];


  showModalAdd: boolean = false;
  showModalEdit: boolean = false;
  showModalDelete: boolean = false;


  abrirModalAdd() {
    this.showModalAdd = true;
  }

  fecharModalAdd() {
    this.showModalAdd = false;
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
}
