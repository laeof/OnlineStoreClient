import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/models/category';
import { IProduct } from 'src/app/models/products';
import { ApiService } from 'src/app/services/api/api.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductsService } from 'src/app/services/products/products.service';


interface Dictionary {
    [key: string]: string;
}

@Component({
    selector: 'app-characteristics',
    templateUrl: './characteristics.component.html',
    styleUrls: ['./characteristics.component.scss']
})

export class CharacteristicsComponent implements OnInit {

    @Input() product: IProduct

    entries: [string, any][];

    products: IProduct[] = [];

    category: ICategory = {
        id: '',
        name: '',
        imgPath: '',
        products: []
    };



    constructor(private productsService: ProductsService, private route: ActivatedRoute, private categoryService: CategoryService) { }

    ngOnInit() {
        this.productsService.getAll().subscribe(products => {
            this.products = products
        })

        const dictionary: Dictionary = {
            diagonal: 'діагональ',
            frequency: 'частота оновлення',
            reaction: 'час реакції',
            brightness: 'яскравість',
            matrixType: 'тип матриці',
            interfaces: 'Інтерфейси',
            contrast: 'Контраст',
            ratio: 'Роздільна здатність',
            name: 'Назва',
            description: 'опис',
            price: 'ціна',
            size: 'Розмір',
            weight: 'вага',
            color: 'колір',
            country: 'країна',
            guarantee: 'гарантія',
            additional: 'додатково',
            kit: 'комплектація'
        };

        setTimeout(() => {
            const entriesToExclude = ['amount', 'id', 'created', 'isNew', 'isDeleted', 'categoryId', 'clickCount', 'date', 'images', 'salePrice', 'category']; // Здесь перечислите свойства, которые хотите исключить
            this.entries = Object.entries(this.product).filter(([key, _]) => !entriesToExclude.includes(key))
                .map(([key, value]) => [dictionary[key] || key, value]);

            console.log(this.entries);
        }, 200);
    }
}