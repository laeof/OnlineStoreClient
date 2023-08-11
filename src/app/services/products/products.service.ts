import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs"
import { IProduct } from "../../models/products"
import { AuthService } from "../auth/auth.service";

@Injectable({
    providedIn: 'root'
})



export class ProductsService {
    constructor(private http: HttpClient, private authService: AuthService) {

    }

    getAll(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>('https://localhost:5000/api/goods/product')
    }
    getById(id: string): Observable<IProduct> {
        return this.http.get<IProduct>('https://localhost:5000/api/goods/product/' + id)
    }
}