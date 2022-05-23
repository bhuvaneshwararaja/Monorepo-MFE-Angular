import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProducthomeComponent } from './producthome.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService} from "../services/product.service"
import { CardComponent } from './cardComponent/card.component';

@NgModule({
  declarations: [ProducthomeComponent,CardComponent],
  imports: [CommonModule, ProductRoutingModule,
  HttpClientModule
  ],
  providers:[ProductService]
})
export class ProductModule {}
