import { Component, OnInit } from '@angular/core'
import { IProduct } from 'src/app/models/products'
import { ProductsService } from 'src/app/services/products/products.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomePage implements OnInit{
    products: IProduct[] = []

    constructor(private productsService: ProductsService) {

    }

    ngOnInit(): void {
        this.productsService.getAll().subscribe(products => {
            this.products = products
        })
    }
}