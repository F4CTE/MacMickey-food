import { Injectable } from '@angular/core';
import { API_URL } from '../models/api.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url = API_URL + '/Client';
  constructor(private http: HttpClient) { }

  getClient(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url);
  }
}
