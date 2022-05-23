import { AfterViewInit, Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { Product } from '../model/product.model';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'learn-mf-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit,AfterViewInit {

  @ViewChild('itemQuantity ') itemQuantity: ElementRef<HTMLInputElement> | undefined;
 basketItem:Product[] = [];
 totalAmount=0;
  constructor(private cartService:CartService) {}

  ngOnInit(): void {
      this.fetchCartItem()

  }

  ngAfterViewInit(): void {
        
  }

  fetchCartItem(){
    this.cartService.getCartItem().subscribe(cartData => {
      if(cartData != null ){
        this.basketItem = cartData;
        console.log(this.basketItem)
          this.totalAmount = this.basketItem.reduce((sum,price) => sum + price.price,0)

      }
    })
  }


}
