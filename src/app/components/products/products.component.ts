import { Component, Input } from '@angular/core'
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/products';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})

export class ProductsComponent {
    @Input() product: IProduct
    constructor(private router: Router, public apiService: ApiService) {
        this.picUrl = apiService.getApiUrl();
    }
    picUrl: string;
    redirectToProduct(productId: string): void {
        this.router.navigate(['/Product', productId]);
    }
}