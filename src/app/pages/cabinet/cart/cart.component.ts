import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Emitters } from 'src/app/emmiters/emmiters'
import { ICart, ICartItem } from 'src/app/models/cart'
import { IProduct } from 'src/app/models/products'
import { IUser } from 'src/app/models/user'
import { ApiService } from 'src/app/services/api/api.service'
import { ModalService } from 'src/app/services/modal/modal.service'
import { ProductsService } from 'src/app/services/products/products.service'
import { UserService } from 'src/app/services/user/user.service'

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})

export class CartPage {
    user: IUser = {
        id: null,
        firstName: null,
        lastName: null,
        email: null,
        gender: null,
        role: null,
        phoneNumber: null,
    }
    cart: ICart = {
        productId: '',
        userId: '',
        cartItems: [],
    };
    cartItems: ICartItem[] = []
    picUrl: String;
    constructor(private userService: UserService, private productService: ProductsService, private apiService: ApiService, private router: Router) {
        userService.getUser().subscribe({
            next: (user: IUser) => {
                this.user = user;
                if (this.user.id != null) {
                    this.productService.getcart(this.user.id).subscribe(items => {
                        items.forEach(element => {
                            this.productService.getById(element.productId).subscribe(product => {
                                element.product = product;
                            })
                            this.cartItems.push(element);
                        });
                    })
                }
            },
            error: (error: any) => {
                console.error('Ошибка при получении пользователя', error);
            }
        });
        this.picUrl = apiService.getApiUrl();
    }

    Cart: ICart = {
        productId: '',
        userId: null,
        cartItems: []
    }

    addtocart(cartItem: ICartItem) {
        this.Cart.productId = cartItem.productId;
        this.productService.addtocart(this.Cart).subscribe(response => {
            window.location.reload();
        });
    }

    deletefromcart(cartItem: ICartItem) {
        this.productService.deletefromcart(cartItem).subscribe(response => {
            window.location.reload();
        });
    }

    addcartitem(cartItem: ICartItem) {
        this.productService.addcartitem(cartItem).subscribe(response => {
            window.location.reload();
        });
    }

    minusfromcart(cartItem: ICartItem) {
        this.productService.minusfromcart(cartItem).subscribe(response => {
            window.location.reload();
        });
    }

    redirectToCart() {
        this.router.navigate(['/Cabinet/Cart']);
    }
}