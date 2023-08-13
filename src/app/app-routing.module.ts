import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPage } from './pages/product/product.component';
import { HomePage } from './pages/home/home.component';
import { CartPage } from './pages/cart/cart.component';
import { CabinetPage } from './pages/cabinet/cabinet.component';

const routes: Routes = [
  { path: 'Home', component: HomePage },
  { path: 'Product/:id', component: ProductPage },
  { path: 'Cart', component: CartPage },
  { path: 'Cabinet', component: CabinetPage },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', redirectTo: '/Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
