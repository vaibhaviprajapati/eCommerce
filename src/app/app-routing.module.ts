import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Define routes and give path of the order module
*/
const routes: Routes = [
  {
    path: 'order',
    loadChildren: './order/order.module#OrderModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
