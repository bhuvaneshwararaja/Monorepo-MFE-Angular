import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductLibService {
    constructor(private http:HttpClient) { }
    public getProduct(){
        this.http.get("http://loclahost:8081/product-list")
    }

}