import { Injectable } from '@angular/core';
import { API_URL } from '../models/api.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/Country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private url = API_URL + '/Country';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url);
  }

  getByCountryCode(countryCode: string): Observable<Country> {
    return this.http.get<Country>(this.url + '/' + countryCode);
  }

  getByCountryName(countryName: string): Observable<Country> {
    return this.http.get<Country>(this.url + '/name/' + countryName);
  }
}
