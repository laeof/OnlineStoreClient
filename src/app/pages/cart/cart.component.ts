import { Component, OnInit } from '@angular/core'
import { Emitters } from 'src/app/emmiters/emmiters'
import { IProduct } from 'src/app/models/products'
import { ModalService } from 'src/app/services/modal/modal.service'
import { ProductsService } from 'src/app/services/products/products.service'
import { UserService } from 'src/app/services/user/user.service'

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
})

export class CartPage {
    
    constructor() {
        
    }
}