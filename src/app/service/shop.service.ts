import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>("https://dummyjson.com/products?limit=50&skip=0")
  }
}