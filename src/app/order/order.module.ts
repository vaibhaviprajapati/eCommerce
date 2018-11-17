/**
 * @author Vaibhavi Prajapati
 */
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// --------------------------------------------//
import { AddComponent } from './add/add.component';
import { OrderRoutingModule } from './order-routing.module';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { OrderService } from './order.service';
import { BackendService } from './backend.service';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(BackendService)
  ],
  declarations: [AddComponent, ViewComponent, EditComponent],
  exports: [AddComponent, ViewComponent, EditComponent],
  providers: [OrderService]
})
export class OrderModule { }
