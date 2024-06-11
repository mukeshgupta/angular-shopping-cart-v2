import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCartComponent } from './component/app-cart/app-cart.component';
import { AppShopComponent } from './component/app-shop/app-shop.component';

const routes: Routes = [
  {path:'', redirectTo:'shop',pathMatch:'full'},
  {path:'shop', component: AppShopComponent},
  {path:'cart', component: AppCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }