/**
 * @author Vaibhavi Prajapati
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
// ---------------------------------------//
import { Order } from '../order.model';
import { OrderService } from './../order.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  order: Order;
  orderForm: FormGroup;
  id: number;
  constructor(private orderService: OrderService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) {
      this.order = new Order();
    this.id = +this.route.snapshot.paramMap.get('id');
    }

  ngOnInit() {
    this.editOrder(this.id);
    this.orderForm = this.fb.group({
      id: ['', [ Validators.required]],
      name: ['', [ Validators.required, Validators.minLength(5)]],
      quantity: ['', [ Validators.required, Validators.maxLength(8)]],
      size: ['', [ Validators.required]],
      price: ['', [ Validators.required, Validators.minLength(4), ]],
      email: ['', [ Validators.required, Validators.minLength(5)]] ,
      phone: ['', [ Validators.required, Validators.minLength(5)]],
      address: ['', [ Validators.required, Validators.minLength(4), ]],
      city: ['', [ Validators.required, Validators.minLength(5)]] ,
      state: ['', [ Validators.required, Validators.minLength(5)]]
    });
  }
  /**this method is use for get id of the order and pass to getorder method */
  editOrder(id: number) {
    this.orderService
    .editOrder(id)
    .subscribe(order => this.getOrder(order));
  }

  /**
   * this method use for fetch all data from database which using id of the order
   * here i am using patchValue. we can also use setValue for this
   */
  getOrder(order: Order) {
    this.order = order;
    this.orderForm.setValue({
      id: this.order.id,
      name: this.order.name,
      quantity: this.order.quantity,
      size: this.order.size,
      price: this.order.price,
      email: this.order.email,
      phone: this.order.phone,
      address: this.order.address,
      city: this.order.city,
      state: this.order.state,
    });

  }
  /**
   * Update data from in database
   * its update data for perticular id
   */
  updateOrder() {
    this.orderService.updateOrder(this.orderForm.value)
    .subscribe(() => {
      this.orderForm.reset();
        this.router.navigate(['/order/view']);
        console.log(this.orderForm);
      });
  }
}
