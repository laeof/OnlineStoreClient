import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/products';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
    constructor(public apiService: ApiService) {
        this.picUrl = apiService.getApiUrl();
    }
    picUrl: string;
    @Input() product: IProduct;
}
