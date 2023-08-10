import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPage } from './pages/product/product.component';
import { HttpClientModule } from '@angular/common/http';
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

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'Product/:id', component: ProductPage },
];

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
    HomePage,
    ProductPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes), 
    NgxMaskDirective, 
    NgxMaskPipe
  ],
  providers: [
    provideEnvironmentNgxMask(maskConfigFunction),
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})

export class AppModule {

}

