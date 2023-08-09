import { Component, Input } from '@angular/core'
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/products';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})

export class ProductsComponent {
    constructor(private router: Router) { }
    @Input() product: IProduct

    redirectToProduct(productId: string): void {
        this.router.navigate(['/Product', productId]);
    }
}