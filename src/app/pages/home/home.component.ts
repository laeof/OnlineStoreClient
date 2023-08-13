import { Component, OnInit } from '@angular/core'
import { Emitters } from 'src/app/emmiters/emmiters'
import { IProduct } from 'src/app/models/products'
import { ModalService } from 'src/app/services/modal/modal.service'
import { ProductsService } from 'src/app/services/products/products.service'
import { UserService } from 'src/app/services/user/user.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomePage {
    products: IProduct[] = []
    
    constructor(private productsService: ProductsService, private userService: UserService) {
        
    }

    ngOnInit(): void {
        this.productsService.getAll().subscribe(products => {
            this.products = products
        })
    }
}