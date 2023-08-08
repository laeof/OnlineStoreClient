import { Injectable } from "@angular/core"
import { ProductComponent } from "../components/product/product.component"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs"
import { IProduct } from "../models/products"

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    constructor(private http: HttpClient) {

    }

    getAll(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://localhost:5000/api/goods/product')
    }
}