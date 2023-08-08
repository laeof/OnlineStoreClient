import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/products';
import { products as data } from './data/products'
import { ProductComponent } from './components/product/product.component';
import { ProductsService } from './services/products.service';

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
