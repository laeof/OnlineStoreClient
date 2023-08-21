import { Component, OnInit } from '@angular/core'
import { Emitters } from 'src/app/emmiters/emmiters'
import { ICategory } from 'src/app/models/category'
import { ICreateProduct, IProduct } from 'src/app/models/products'
import { IUser } from 'src/app/models/user'
import { CategoryService } from 'src/app/services/category/category.service'
import { ModalService } from 'src/app/services/modal/modal.service'
import { NavigationSettingsService } from 'src/app/services/navigation-settings/navigation_settings.service'
import { ProductsService } from 'src/app/services/products/products.service'
import { UserService } from 'src/app/services/user/user.service'

@Component({
    selector: 'app-addproduct',
    templateUrl: './addproduct.component.html',
})

export class AddProductPage {
    categories: ICategory[];
    productData: ICreateProduct = {
        amount: null,
        name: null,
        description: null,
        price: null,
        categoryId: null,
        images: null,
    };
    constructor(
        private categoryService: CategoryService,
        private productsService: ProductsService
    ) {
        this.categoryService.getAll().subscribe(category => {
            this.categories = category
        })
    }
    ngOnInit(): void {

    }

    addProduct(productData: ICreateProduct) {
        this.productsService.addProduct(productData);
    }
}