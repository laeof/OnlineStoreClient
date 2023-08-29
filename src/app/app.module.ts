import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPage } from './pages/products/product/product.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomePage } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BannersComponent } from './components/banners/banners.component';
import { ProductsComponent } from './components/productpage/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/modal/login/login.component';
import { IConfig, NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { GoodComponent } from './components/productpage/good/good.component';
import { PathComponent } from './components/path/path.component';
import { RateComponent } from './components/productpage/rate/rate.component';
import { SliderComponent } from './components/slider/slider.component';
import { JWT_OPTIONS, JwtInterceptor, JwtModule } from '@auth0/angular-jwt';
import { CartPage } from './pages/cabinet/cart/cart.component';
import { CabinetComponent } from './components/cabinet/cabinet.component';
import { CookieService } from 'ngx-cookie-service';
import { CatalogPage } from './pages/catalog/catalog.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryPage } from './pages/category/categorypage.component';
import { AddProductPage } from './pages/products/addproduct/addproduct.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { CharacteristicsComponent } from './components/productpage/characteristics/characteristics.component';
import { ProductCharacteristicsPage } from './pages/products/productcharacteristics/productcharacteristics.component';
import { ProductNameNavComponent } from './components/productpage/productnameandnavigation/productnameandnavigation.component';
import { ProductReviewsPage } from './pages/products/productreviews/productreviews.component';
import { PersonalInfoPage } from './pages/cabinet/personalinfo/personalinfo.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AdditionalComponent } from './components/productpage/additional/additional.component';

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
    CharacteristicsComponent,
    ProductCharacteristicsPage,
    ProductReviewsPage,
    ProductNameNavComponent,
    BlogComponent,
    SidebarComponent,
    LoginComponent,
    GoodComponent,
    CategoryComponent,
    CabinetComponent,
    LoadingComponent,
    AdditionalComponent,
    CartPage,
    HomePage,
    ProductPage,
    CatalogPage,
    CategoryPage,
    AddProductPage,
    PersonalInfoPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskDirective, 
    NgxMaskPipe,
    NgxFileDropModule,
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
    CookieService,
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})

export class AppModule {

}

