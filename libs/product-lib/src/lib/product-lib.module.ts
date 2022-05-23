import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule } from '@angular/common/http';
import {ProductLibService} from "./product-list-service"
@NgModule({
  imports: [CommonModule,
    HttpClientModule],
    providers:[ProductLibService],
})
export class ProductLibModule {}
