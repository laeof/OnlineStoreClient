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

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
    shownMaskExpression: '(000) 000-00-00'
  };
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannersComponent,
    ProductsComponent,
    BlogComponent,
    SidebarComponent,
    LoginComponent,
    GoodComponent,
    CartPage,
    HomePage,
    ProductPage,
    CabinetPage,
    SliderComponent,
    PathComponent,
    RateComponent,
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

