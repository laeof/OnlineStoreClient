import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPage } from './pages/product/product.component';
import { HomePage } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'Product/:id', component: ProductPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
