import { Component, Input, OnInit } from '@angular/core'
import { ICategory } from 'src/app/models/category';
import { ApiService } from 'src/app/services/api/api.service';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit {
    
    categories: ICategory[] = []

    constructor(public apiService: ApiService, private categoryService: CategoryService) {
        this.picUrl = apiService.getApiUrl();
    }
    ngOnInit(): void {
        this.categoryService.getAll().subscribe(category => {
          this.categories = category;
        });
    }

    picUrl: string;
}