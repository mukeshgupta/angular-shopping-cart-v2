import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './component/app-header/app-header.component';
import { AppCartComponent } from './component/app-cart/app-cart.component';
import { AppShopComponent } from './component/app-shop/app-shop.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {AppShopProductComponent} from './component/app-shop-product/app-shop-product.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppCartComponent,
    AppShopComponent,
    AppShopProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }