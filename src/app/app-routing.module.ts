import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPage } from './pages/product/product.component';
import { HomePage } from './pages/home/home.component';
import { CartPage } from './pages/cart/cart.component';
import { CabinetPage } from './pages/cabinet/cabinet.component';
import { CatalogPage } from './pages/catalog/catalog.component';
import { CategoryPage } from './pages/category/categorypage.component';
import { AddProductPage } from './pages/addproduct/addproduct.component';
import { ProductCharacteristicsPage } from './pages/productcharacteristics/productcharacteristics.component';
import { ProductReviewsPage } from './pages/productreviews/productreviews.component';

const routes: Routes = [
  { path: 'Home', component: HomePage },
  { path: 'Product/:id', component: ProductPage },
  { path: 'Product/:id/Characteristics', component: ProductCharacteristicsPage },
  { path: 'Product/:id/Reviews', component: ProductReviewsPage },
  { path: 'Cart', component: CartPage },
  { path: 'Cabinet', component: CabinetPage },
  { path: 'Catalog', component: CatalogPage },
  { path: 'AddProduct/:id', component: AddProductPage},
  { path: 'Categories/:id', component: CategoryPage },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', redirectTo: '/Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
