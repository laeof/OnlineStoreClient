import { Component, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/products'
import { ProductsService } from 'src/app/services/products/products.service'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductPage {
    product: IProduct;
    products: IProduct[] = []

    constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.productsService.getAll().subscribe(products => {
            this.products = products
        })
        this.route.paramMap.subscribe(params => {
            const productId = params.get('id');
            if (productId != null) {
                this.productsService.getById(productId).subscribe(productData => {
                    this.product = productData;
                });
            }
        });
    }
}