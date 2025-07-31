import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

export enum EResult {
  PROGRESS = 0,
  REJECTED = 1,
  FINISHED = 2,
}

export interface IPart {
  id: string;
  serialnumber: string;
  status: EResult;
}

export interface ICreatePart {
  SerialNumber: string;
  StationId: string;
}

@Injectable({
  providedIn: 'root',
})
export class PartService {
  private url = `${environment.apiUrl}/parts`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url);
  }

  updateStatus(serial: string, status: EResult) {
    return this.http.put(`${this.url}/status`, { serial, status });
  }

  createPart(payload: ICreatePart) {
    return this.http.post(this.url, payload);
  }
}
