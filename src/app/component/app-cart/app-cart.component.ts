import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './app-cart.component.html',
  styleUrl: './app-cart.component.css'
})
export class AppCartComponent implements OnInit{
  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    if (confirm("Are you sure you want to empty cart!") == true) {
      this.cartService.removeAllCart();
    } 
  }
  updateQuantity(item: any, newQuantity: number) {
    if (!isNaN(newQuantity)) {
      this.cartService.updateQuantity(item, newQuantity);
    }
  }
}
