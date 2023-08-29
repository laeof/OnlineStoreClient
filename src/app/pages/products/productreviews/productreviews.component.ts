import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/models/category';
import { IProduct } from 'src/app/models/products';
import { ApiService } from 'src/app/services/api/api.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
    selector: 'app-productreviewspage',
    templateUrl: './productreviews.component.html',
    styleUrls: ['./productreviews.component.scss']
})

export class ProductReviewsPage implements OnInit {
    product: IProduct = {
        amount: 0,
        name: '',
        description: '',
        price: 0,
        categoryId: '',
        images: [],
        id: '',
        created: '',
        isNew: false,
        isDeleted: false,
        clickCount: 0,
        date: null
    };
    category: ICategory = {
        id: '',
        name: '',
        imgPath: '',
        products: []
    };
    constructor(private productsService: ProductsService, private route: ActivatedRoute, private categoryService: CategoryService) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const productId = params.get('id');
            if (productId != null) {
                this.productsService.getById(productId).subscribe(productData => {
                    this.product = productData;
                    this.categoryService.getId(productData.categoryId).subscribe(
                        category => {
                            this.category = category;
                            console.log(category);
                        }
                    )
                });
            }
        })
    }
}