import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

export interface IStation {
    id: string
    name: string
    index: number
}

@Injectable({
    providedIn: 'root'
})
export class StationService {

    private url = `${environment.apiUrl}/stations`
    
    constructor(private http: HttpClient) {}

    getAll() {
        return this.http.get(this.url);
    }
    
}