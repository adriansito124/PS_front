import { Component, Input } from '@angular/core';
import { Header } from '../../components/header/header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-station',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-station.html',
  styleUrl: './view-station.scss'
})
export class ViewStation {
  @Input() name_station: string = 'Estação 1';

  showModalEdit: boolean = false;
  showModalDelete: boolean = false;

  fecharModalEditStation(){
    this.showModalEdit = false;
  }

  abrirModalEditStation(){
    this.showModalEdit = true;
  }

  fecharModalDelete(){
    this.showModalDelete = false;
  }

  abrirModalDelete(){
    this.showModalDelete = true;
  }
}
