import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }
  addtoCart(product : any){
    let isProdExistinCart = false;
    let discountedPrice = product.price;
    if (product.discountPercentage > 0) {
      discountedPrice = product.price - (product.price * product.discountPercentage / 100);
      discountedPrice = +(discountedPrice.toFixed(2));
    } 
    for (let i = 0; i < this.cartItemList.length; i++) {
      if (this.cartItemList[i].id == product.id) {
        this.cartItemList[i].quantity++;
        this.cartItemList[i].total = +(this.cartItemList[i].quantity * discountedPrice).toFixed(2);
        isProdExistinCart = true;
        break;
      }
    }
    if (!isProdExistinCart) {
      this.cartItemList.push({ ...product, price: discountedPrice, quantity: 1, total: 1 * discountedPrice });
    }
    
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  updateQuantity(product : any, newQuantity: number){
    for (let i = 0; i < this.cartItemList.length; i++) {
      if (this.cartItemList[i].id == product.id) {
        this.cartItemList[i].quantity = newQuantity;
        this.cartItemList[i].total = +(newQuantity * this.cartItemList[i].price).toFixed(2);
        break;
      }
    }
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}