/**
 * @author Vaibhavi Prajapati
 */
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// -------------------------------------------------//
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';

/**Define routes and its path  */
const routes: Routes = [
  { path: '',
   redirectTo: 'view',
    pathMatch: 'full' },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'view',
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
