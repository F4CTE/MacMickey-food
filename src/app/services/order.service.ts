import { Injectable } from '@angular/core';
import { API_URL } from '../models/api.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/Order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = API_URL + '/Order';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.url);
  }

  getActiveOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.url + '/active');
  }

  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(this.url + '/' + id);
  }

}
