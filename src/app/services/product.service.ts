import { Injectable } from '@angular/core';
import { API_URL } from '../models/api.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = API_URL + '/Product';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
  getByType(type: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + '/' + type);
  }
  getById(id: number): Observable<Product> {
    return this.http.get<Product>(this.url + '/' + id);
  }
}