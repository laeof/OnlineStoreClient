import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { ICart } from 'src/app/models/cart';
import { IProduct } from 'src/app/models/products';
import { ApiService } from 'src/app/services/api/api.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { SliderService } from 'src/app/services/slider/slider.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
    selector: 'app-good',
    templateUrl: './good.component.html',
    styleUrls: ['./good.component.scss']
})

export class GoodComponent implements OnInit {
    constructor(private router: Router,
        public apiService: ApiService,
        private productService: ProductsService,
        private userService: UserService) {
        this.picUrl = apiService.getApiUrl();
    }
    ngOnInit(): void {
        
    }
    picUrl: string;
    @Input() product: IProduct;
}