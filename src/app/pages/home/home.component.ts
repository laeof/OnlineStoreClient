import { Component, OnInit } from '@angular/core'
import { Emitters } from 'src/app/emmiters/emmiters'
import { IProduct } from 'src/app/models/products'
import { ModalService } from 'src/app/services/modal/modal.service'
import { ProductsService } from 'src/app/services/products/products.service'
import { UserService } from 'src/app/services/user/user.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomePage {
    novelties: IProduct[] = []
    popular: IProduct[] = []
    loading = true;
    constructor(private productsService: ProductsService, private userService: UserService) {

    }

    ngOnInit(): void {
        this.productsService.getAll().subscribe(products => {

            this.popular = products.sort((a, b) => b.clickCount - a.clickCount).slice(0, 4);

            this.loading = false;
        })
        this.productsService.getAll().subscribe(products => {

            products.forEach(product => {
                product.date = new Date(product.created);
            });

            this.novelties = products.sort((a, b) => (b.date as Date).getTime() - (a.date as Date).getTime()).slice(0, 4);

            this.loading = false;
        })
    }
}