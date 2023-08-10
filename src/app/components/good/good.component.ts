import { Component, Input } from '@angular/core'
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/products';

@Component({
    selector: 'app-good',
    templateUrl: './good.component.html',
    styleUrls: ['./good.component.scss']
})

export class GoodComponent {
    constructor(private router: Router) { }
    @Input() product: IProduct
    
}