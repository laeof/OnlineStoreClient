import { Component, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/models/category';
import { IProduct } from 'src/app/models/products'
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductsService } from 'src/app/services/products/products.service'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductPage {
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
        isDeleted: false
    };
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