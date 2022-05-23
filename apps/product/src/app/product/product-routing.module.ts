import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducthomeComponent } from './producthome.component';

const routes: Routes = [{
  path:"",component:ProducthomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
