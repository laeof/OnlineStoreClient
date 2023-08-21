import { Component } from '@angular/core'
import { ICategory } from 'src/app/models/category';
import { ApiService } from 'src/app/services/api/api.service';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.scss']
})

export class CatalogPage {
    
    category: ICategory = {
        id: '',
        name: '',
        imgPath: '',
        products: []
    };

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