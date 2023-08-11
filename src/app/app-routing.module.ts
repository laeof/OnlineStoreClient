import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPage } from './pages/product/product.component';
import { HomePage } from './pages/home/home.component';
import { ProfilePage } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomePage},
  { path: 'Product/:id', component: ProductPage},
  { path: 'Profile/', component: ProfilePage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
