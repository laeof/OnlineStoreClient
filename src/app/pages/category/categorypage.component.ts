import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Route, Router } from '@angular/router'
import { ICategory } from 'src/app/models/category'
import { IProduct } from 'src/app/models/products'
import { CategoryService } from 'src/app/services/category/category.service'
import { ProductsService } from 'src/app/services/products/products.service'
import { UserService } from 'src/app/services/user/user.service'

@Component({
    selector: 'app-categorypage',
    templateUrl: './categorypage.component.html',
    styleUrls: ['./categorypage.component.scss']
})

export class CategoryPage implements OnInit{
    products: IProduct[] = [];
    category: ICategory;
    constructor(private productsService: ProductsService, private userService: UserService, private categoryService: CategoryService, private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const categoryId = params.get('id');
            if (categoryId != null) {
                this.categoryService.getId(categoryId).subscribe(category => {
                    this.category = category;
                    this.products = [];
                    this.category.products.forEach(element => {
                        this.productsService.getById(element.id).subscribe(product => {
                            this.products.push(product);
                        });
                    });
                });
            }
        });
    }

    
    redirectToAddProduct(categoryId: string) {
        this.router.navigate(['/AddProduct/', categoryId]);
    }
}