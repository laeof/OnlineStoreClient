import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs"
import { ICreateProduct, IProduct } from "../../models/products"
import { AuthService } from "../auth/auth.service";
import { ApiService } from "../api/api.service";

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    apiUrl: string
    constructor(private http: HttpClient,
                private apiService: ApiService) {
        this.apiUrl = apiService.getApiUrl();
    }

    getAll(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.apiUrl  + 'api/goods/product/')
    }

    getById(id: string): Observable<IProduct> {
        return this.http.get<IProduct>(this.apiUrl + 'api/goods/product/' + id)
    }

    addProduct(product: ICreateProduct) {
        console.log(product);
        return this.http.post<ICreateProduct>(this.apiUrl + `api/goods/create`, product);
    }

}