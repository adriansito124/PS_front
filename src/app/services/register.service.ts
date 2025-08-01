import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

export interface ICreateRegister {
  serialNumber: string;
}

@Injectable({
    providedIn: 'root',
})
export class RegisterService {

    private url = `${environment.apiUrl}/registers`;

    constructor(private http: HttpClient) { }

    createRegister(stationId: string, payload: ICreateRegister) {
        return this.http.post(`${this.url}/${stationId}`, payload);
    }
}