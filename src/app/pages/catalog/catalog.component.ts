import { Component } from '@angular/core'
import { ICategory } from 'src/app/models/category';

@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
})

export class CatalogPage {
    
    category: ICategory;

    constructor() {
        
    }
}