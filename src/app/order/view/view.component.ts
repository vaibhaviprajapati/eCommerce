/**
 * @author Vaibhavi Prajapati
 */
import { Component, OnInit } from '@angular/core';
// ------------------------------------------//
import { OrderService } from '../order.service';
import { Order } from '../order.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public orders: Order[];
  constructor(private orderService: OrderService) { }

  ngOnInit() {

    this.getOrder();
  }
  /**
   * get all data from database and displaying data in table
   * */
  getOrder() {
    this.orderService.getOrders().
    subscribe(order => {
      this.orders = order;
    });
  }
  /**
   * delete data from database using perticular id
   *  */
  deleteOrder(id: number): void {
    this.orderService.deleteOrder(id).subscribe(
      data => {this.getOrder(); },
    );
    console.log(id);
  }
}
