import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs"
import { IProduct } from "../../models/products"
import { AuthService } from "../auth/auth.service";
import { ApiService } from "../api/api.service";
import { ICategory } from "src/app/models/category";

@Injectable({
    providedIn: 'root'
})

export class CategoryService {
    apiUrl: string
    constructor(private http: HttpClient, private apiService: ApiService) {
        this.apiUrl = apiService.getApiUrl() + 'api/category/';
    }

    getAll(): Observable<ICategory[]> {
        return this.http.get<ICategory[]>(this.apiUrl + 'getall')
    }
    getId(id: string): Observable<ICategory> {
        return this.http.get<ICategory>(this.apiUrl + 'getid/' + id)
    }
}