import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { ICart } from 'src/app/models/cart';
import { ICategory } from 'src/app/models/category';
import { IProduct } from 'src/app/models/products';
import { ApiService } from 'src/app/services/api/api.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
    selector: 'app-buyinfo',
    templateUrl: './buyinfo.component.html',
    styleUrls: ['./buyinfo.component.scss']
})

export class BuyInfoComponent implements OnInit {

    @Input() product: IProduct

    entries: [string, any][];

    products: IProduct[] = [];

    category: ICategory = {
        id: '',
        name: '',
        imgPath: '',
        products: []
    };
    constructor(private router: Router,
        public apiService: ApiService,
        private productService: ProductsService,
        private userService: UserService) {
        this.picUrl = apiService.getApiUrl();
        this.userService.getUser().subscribe((response) => {
            this.Cart.userId = response.id;
        });
    }

    Cart: ICart = {
        productId: '',
        userId: '',
        cartItems: [],
    }
    picUrl: string;

    ngOnInit() {
        this.productService.getAll().subscribe(products => {
            this.products = products
        })
    }

    addToCart() {
        this.Cart.productId = this.product.id;
        this.productService.addtocart(this.Cart).subscribe(response => {
            this.redirectToCart();
        });
    }

    redirectToCart() {
        this.router.navigate(['/Cabinet/Cart']);
    }
}