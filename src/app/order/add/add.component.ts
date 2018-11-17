/**
 * @author Vaibhavi Prajapati
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
// --------------------------------------//
import { Order } from '../order.model';
import { OrderService } from './../order.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public orderForm: FormGroup;
   public addOrders: Order[];
  constructor(private fb: FormBuilder,
              private orderService: OrderService,
              private router: Router) {
    this.addOrders = [];
  }

  ngOnInit() {
    /**
     *  validation for order field which representing in template
     */
    this.orderForm = this.fb.group({
      name: ['', [ Validators.required, Validators.minLength(5)]],
      quantity: ['', [ Validators.required, Validators.max(50)]],
      size: ['', [ Validators.required]],
      price: ['', [ Validators.required ]],
      email: ['', [ Validators.required, Validators.minLength(10)]] ,
      phone: ['', [ Validators.required]],
      address: ['', [ Validators.required, Validators.max(10)]],
      city: ['', [ Validators.required, Validators.minLength(3)]] ,
      state: ['', [ Validators.required, Validators.minLength(5)]]
    });

  }
  /**
   * this method is use for add order into list of order(post data)
   */
  addOrder() {
      this.orderService.addOrder(this.orderForm.value)
        .subscribe( data => {
          this.addOrders.push(data);
          this.router.navigate(['/order/view']);
        });

  }

}
