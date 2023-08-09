import { Component, Input } from '@angular/core'
import { IProduct } from 'src/app/models/products'
import { ProductsService } from 'src/app/services/products/products.service'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductPage {
    @Input() product: IProduct
    
}