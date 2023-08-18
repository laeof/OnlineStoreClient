import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPage } from './pages/product/product.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomePage } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BannersComponent } from './components/banners/banners.component';
import { ProductsComponent } from './components/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/modal/login/login.component';
import { IConfig, NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { GoodComponent } from './components/good/good.component';
import { PathComponent } from './components/path/path.component';
import { RateComponent } from './components/rate/rate.component';
import { SliderComponent } from './components/slider/slider.component';
import { JWT_OPTIONS, JwtInterceptor, JwtModule } from '@auth0/angular-jwt';
import { CartPage } from './pages/cart/cart.component';
import { CabinetPage } from './pages/cabinet/cabinet.component';
import { CookieService } from 'ngx-cookie-service';
import { CatalogPage } from './pages/catalog/catalog.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryPage } from './pages/category/categorypage.component';
import { AddProductPage } from './pages/addproduct/addproduct.component';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
    shownMaskExpression: '38(000) 000-00-00'
  };
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    PathComponent,
    RateComponent,
    BannersComponent,
    ProductsComponent,
    BlogComponent,
    SidebarComponent,
    LoginComponent,
    GoodComponent,
    CategoryComponent,
    CategoriesComponent,
    CartPage,
    HomePage,
    ProductPage,
    CabinetPage,
    CatalogPage,
    CategoryPage,
    AddProductPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskDirective, 
    NgxMaskPipe,
    JwtModule.forRoot({})
  ],
  providers: [
    provideEnvironmentNgxMask(maskConfigFunction),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    CookieService
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})

export class AppModule {

}

