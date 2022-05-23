import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn:"root"
})

export class CartService{
    constructor(private http:HttpClient){}

    getCartItem(){
        return this.http.get<any>("http://localhost:9001/cart/cart-list")
    }
}