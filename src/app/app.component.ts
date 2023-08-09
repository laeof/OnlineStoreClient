import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/products';
import { products as data } from './data/products'
import { ProductPage } from './pages/product/product.component';
import { HomePage } from './pages/home/home.component';
import { ProductsService } from './services/products/products.service';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ang app';

  products: IProduct[] = []

  constructor(private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(products => {
      this.products = products
    })
  }
}
