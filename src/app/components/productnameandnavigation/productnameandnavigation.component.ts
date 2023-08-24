import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { IProduct } from "src/app/models/products";
import { ApiService } from "src/app/services/api/api.service";

@Component({
    selector: 'app-productnamenav',
    templateUrl: './productnameandnavigation.component.html',
    styleUrls: ['./productnameandnavigation.component.scss']
})

export class ProductNameNavComponent {
    constructor(private router: Router,
        public apiService: ApiService) {
        this.picUrl = apiService.getApiUrl();
    }
    picUrl: string;
    @Input() product: IProduct
    redirectToCharacteristics() {
        this.router.navigate(['/Product/' + this.product.id + '/Characteristics']);
    }
    redirectToGeneral() {
        this.router.navigate(['/Product/' + this.product.id]);
    }
    redirectToReviews() {
        this.router.navigate(['/Product/' + this.product.id + '/Reviews']);
    }
}