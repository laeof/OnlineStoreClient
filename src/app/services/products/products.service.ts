import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs"
import { IProduct } from "../../models/products"
import { AuthService } from "../auth/auth.service";
import { ApiService } from "../api/api.service";

@Injectable({
    providedIn: 'root'
})



export class ProductsService {
    apiUrl: string
    constructor(private http: HttpClient, private apiService: ApiService) {
        this.apiUrl = apiService.getApiUrl() + 'api/goods/product/';
    }

    getAll(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.apiUrl)
    }
    getById(id: string): Observable<IProduct> {
        return this.http.get<IProduct>(this.apiUrl + id)
    }

}