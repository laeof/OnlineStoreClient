import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/models/category';
import { IProduct } from 'src/app/models/products';
import { ApiService } from 'src/app/services/api/api.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
    selector: 'app-characteristics',
    templateUrl: './characteristics.component.html'
})

export class CharacteristicsComponent implements OnInit {

    @Input() product: IProduct
    products: IProduct[] = [];
    category: ICategory = {
        id: '',
        name: '',
        imgPath: '',
        products: []
    };
    constructor(private productsService: ProductsService, private route: ActivatedRoute, private categoryService: CategoryService) { }

    ngOnInit(): void {
        this.productsService.getAll().subscribe(products => {
            this.products = products
        })
        this.route.paramMap.subscribe(params => {
            this.categoryService.getId(this.product.categoryId).subscribe(
                category => {
                    this.category = category;
                    console.log(category);
                }
            )
        });
    }
}