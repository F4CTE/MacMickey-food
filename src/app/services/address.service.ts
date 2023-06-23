import { Injectable } from '@angular/core';
import { API_URL } from '../models/api.config';
import { Address } from '../models/Address';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private url = API_URL + '/Address';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Address[]> {
    return this.http.get<Address[]>(this.url);
  }

  getById(id: number): Observable<Address> {
    return this.http.get<Address>(this.url + '/' + id);
  }

  put(address: Address): Observable<Address> {
    return this.http.post<Address>(this.url, address);
  }

}
