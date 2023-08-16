import { Component, Input } from '@angular/core'
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/category';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})

export class CategoryComponent {
    constructor(public apiService: ApiService, private router: Router) {
        this.picUrl = apiService.getApiUrl() + 'img/category/';
    }
    redirectToCategory(categoryId: string): void {
        this.router.navigate(['/Categories/', categoryId]);
    }
    @Input() category: ICategory;
    picUrl: string;
}