import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import {Product} from "../model/product.model"
import { map } from 'rxjs';
@Component({
  selector: 'learn-mf-producthome',
  templateUrl: './producthome.component.html',
  styleUrls: ['./producthome.component.css'],
})
export class ProducthomeComponent implements OnInit {
  productList:Product[] = [];
  productViewCount = 10
  btnActive:boolean=true;
  constructor(private http:HttpClient,private productService:ProductService) {}

  ngOnInit(): void {
      this.fetchProduct()
  }

  fetchProduct(){
    this.productService.getProduct()
    .subscribe((res) => {
        this.productList = res
    })
  }

  pushProduct(){
    this.productViewCount +=10;
    if(this.productList.length == this.productViewCount){
      this.btnActive=false
    }
  }




}
