import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Product} from "../model/product.model"

@Injectable({
    providedIn:"root"
})

export class ProductService{
    constructor(private http:HttpClient){}
    getProduct(){
        return this.http.get<any>("http://localhost:9001/product/product-list")
    }
    addProductToCart(id:string){
        return this.http.get<any>(`http://localhost:9001/product/product-list/add/${id}`)
    }
}