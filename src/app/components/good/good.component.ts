import { Component, Input } from '@angular/core'
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/products';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
    selector: 'app-good',
    templateUrl: './good.component.html',
    styleUrls: ['./good.component.scss']
})

export class GoodComponent {
    constructor(private router: Router,
        public apiService: ApiService) {
        this.picUrl = apiService.getApiUrl();
    }
    picUrl: string;
    @Input() product: IProduct
}