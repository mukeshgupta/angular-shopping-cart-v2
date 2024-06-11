import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../service/shop.service';
import { CartService } from '../../service/cart.service';
import { SearchService } from '../../service/search.service';

@Component({
  selector: 'app-shop',
  templateUrl: './app-shop.component.html',
  styleUrl: './app-shop.component.css'
})
export class AppShopComponent implements OnInit {

  public productList : any ;
  public filteredProductList: any;
  public filterCategory : any
  searchKey:string ="";
  public searchTerm : string = "";
  constructor(
    private shopService : ShopService,
    private cartService : CartService,
    public searchService: SearchService) { }

  ngOnInit(): void {
    this.shopService.getProduct()
    .subscribe(res=>{
      this.productList = res.products;
      this.filteredProductList = res.products.map((product: any) => {
        return {...product};
       });
    });

    this.searchService.searchTerm$.subscribe(value => {
      this.searchTerm = value;
      if (this.productList && this.productList.length) {
        if (this.searchTerm && this.searchTerm.trim().length) {
          // in case of  searchTerm = not null, show only matched products
          this.searchTerm = this.searchTerm.trim().toLowerCase();
          this.filteredProductList = this.productList.filter((product: any) =>
            product.title.toLowerCase().includes(this.searchTerm)
          );
        } else {
          // in case of  searchTerm = null, show all products
          this.filteredProductList = this.productList.map((product: any) => {
          return {...product}
          });
        }
      }
    });
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  search(event:any){
    this.searchService.setSearchTerm((event.target as HTMLInputElement).value);
  }
}
