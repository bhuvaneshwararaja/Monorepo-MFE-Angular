import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'learn-mf-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() product:any;
  @Input() index:any;

  constructor(private productservice:ProductService) {}

  ngOnInit(): void {
  }



addToCart(index:any){
      this.productservice.addProductToCart(index).subscribe(status =>{
        if(status.update == true) alert("product added to cart")
      })
}



}
