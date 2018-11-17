import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
// ----------------------------------//
import { Order } from './order.model';

@Injectable()
export class OrderService {
  /**URL to web api */
  private orderURL = 'api/orders';

  constructor(private http: HttpClient) { }
  /**
   * get order from the server
   */
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderURL);
  }
  /**
   * AddOrder method add order to the server
   */
  addOrder(order: Order): Observable<any> {
    return this.http.post(this.orderURL, order);
  }
  /**
   * editOrder method take id .
   * here url representing  the order url and order id on the browser URL
  */
  editOrder(id: number): Observable<Order> {
    const url = `${this.orderURL}/${id}`;
    return this.http.get<Order>(url);
  }
  /**
   *updateOrder method update the recode of the database
   */
  updateOrder(order: Order): Observable<any> {
  return this.http.put(this.orderURL, order);
 }
 /**
  *deleteOrdermethod delete record from the server using @param id
  */
deleteOrder(id: number): Observable<Order[]> {
  const url = this.orderURL + '/' + id;
  if ( confirm('Are you sure you want to delete this Order?')) {
    console.log(url);
    return this.http.delete<Order[]>(url);
  }
}
}
