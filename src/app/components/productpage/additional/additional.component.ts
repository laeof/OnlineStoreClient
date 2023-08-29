import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/category';
import { IProduct } from 'src/app/models/products';
import { ApiService } from 'src/app/services/api/api.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { LoadingComponent } from '../../loading/loading.component';
import { ProductsService } from 'src/app/services/products/products.service';


@Component({
    selector: 'app-additional',
    templateUrl: './additional.component.html',
    styleUrls: ['./additional.component.scss']
})

export class AdditionalComponent implements OnInit {
    loading = true;

    products: IProduct[] = []

    constructor(private router: Router, public apiService: ApiService, private categoryService: CategoryService, private productService: ProductsService) {
        this.picUrl = apiService.getApiUrl();
    }
    ngOnInit(): void {
        this.productService.getAll().subscribe(response => {
            this.products = response.slice(0, 6);
        });
    }
    picUrl: string;
    redirectToProduct(productId: string): void {
        window.location.href = `/Product/${productId}`;
    }
}