import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationService, IStation } from '../../services/station.service';
import { PartService } from '../../services/part.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-station',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-station.html',
  styleUrl: './view-station.scss',
})
export class ViewStation implements OnInit {
  @Input() stationId!: string;

  station: IStation | null = null;
  showModalEdit = false;
  showModalDelete = false;
  newName: string = '';

  constructor(
    private stationService: StationService,
    private partService: PartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.stationId = id;
        this.loadStation();
      }
    });
  }

  get name_station() {
    return this.station?.name ?? '';
  }
  

  loadStation() {
    this.stationService.getAll().subscribe((stations: any) => {
      this.station = stations.find((s: IStation) => s.id === this.stationId);
      this.newName = this.station?.name ?? '';
      console.log(this.station);
    });
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

  deletarPart(partId: string) {
    this.partService.deletePart(partId).subscribe(() => {
      this.loadStation(); 
    });
  }
}
