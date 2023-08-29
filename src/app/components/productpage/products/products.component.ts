import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/category';
import { IProduct } from 'src/app/models/products';
import { ApiService } from 'src/app/services/api/api.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { LoadingComponent } from '../../loading/loading.component';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
    @Input() product: IProduct
    category: ICategory = {
        imgPath: '',
        id: '',
        name: '',
        products: []
    }
    loading = true;
    constructor(private router: Router, public apiService: ApiService, private categoryService: CategoryService) {
        this.picUrl = apiService.getApiUrl();
    }
    ngOnInit(): void {
        this.categoryService.getId(this.product.categoryId).subscribe(category => {
            this.category = category;
            this.loading = false;
        })
    }
    picUrl: string;
    redirectToProduct(productId: string): void {
        window.location.href = `/Product/${productId}`;
    }
}