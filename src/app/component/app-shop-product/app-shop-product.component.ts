import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../../service/cart.service';
interface Product {
  id: number;
  price: number;
  title: string;
  description: string;
  category: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags?: Array<string>,
  brand : string;
  sku: string;
  weight: number;
  dimensions: any;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews?: Array<any>;
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: any;
  images: Array<string>;
  thumbnail: string;
}
@Component({
  selector: 'app-shop-product',
  templateUrl: './app-shop-product.component.html',
  styleUrl: './app-shop-product.component.css'
})
export class AppShopProductComponent implements OnInit, OnChanges{

  @Input() product : Product  = {} as Product;
  discountedPrice: number = 0; 
  hasDiscount: boolean = false;
  constructor(private cartService : CartService) { }
  ngOnInit(): void {
    this.hasDiscount = this.product.discountPercentage > 0;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.discountedPrice = this.product.price - (this.product.price * this.product.discountPercentage / 100);
    this.discountedPrice = +(this.discountedPrice.toFixed(2));
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  get fullStars(): number[] {
    // Get full stars based on rating
    return Array(Math.floor(this.product.rating || 0)); 
  }

  get emptyStars(): number[] {
    // Get empty stars based on rating
    return Array(5 - Math.floor(this.product.rating || 0)); 
  }
}
