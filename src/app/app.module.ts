import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPage } from './pages/product/product.component';
import { HttpClientModule} from '@angular/common/http';
import { HomePage } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BannersComponent } from './components/banners/banners.component';
import { ProductsComponent } from './components/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'Product/:id', component: ProductPage },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannersComponent,
    ProductsComponent,
    HomePage,
    ProductPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
