import { Component, OnInit } from '@angular/core'
import { IProduct } from 'src/app/models/products'
import { ModalService } from 'src/app/services/modal/modal.service'
import { ProductsService } from 'src/app/services/products/products.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomePage {
    products: IProduct[] = []

    constructor(private productsService: ProductsService,
                public modalService: ModalService) {
        
    }

    ngOnInit(): void {
        this.productsService.getAll().subscribe(products => {
            this.products = products
        })
    }
}