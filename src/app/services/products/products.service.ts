import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs"
import { ICreateProduct, IProduct } from "../../models/products"
import { AuthService } from "../auth/auth.service";
import { ApiService } from "../api/api.service";
import { NgxFileDropEntry } from "ngx-file-drop";
import { ICart, ICartItem } from "src/app/models/cart";

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
        return this.http.get<IProduct[]>(this.apiUrl + 'api/goods/product/')
    }

    getById(id: string): Observable<IProduct> {
        return this.http.get<IProduct>(this.apiUrl + 'api/goods/product/' + id)
    }
    addProduct(productData: ICreateProduct) {
        return this.http.post<ICreateProduct>(this.apiUrl + `api/goods/create`, productData);
    }
    addImg(formData: FormData) {
        const headers = new HttpHeaders({
            'enctype': 'multipart/form-data',
        });
        return this.http.post(this.apiUrl + `api/goods/uploadimg`, formData, { headers: headers });
    }
    addtocart(cart: ICart) {
        return this.http.post(this.apiUrl + `api/cart/addtocart`, cart);
    }
    getcart(id: string): Observable<ICartItem[]> {
        return this.http.get<ICartItem[]>(this.apiUrl + 'api/cart/getcart' + '?id=' + id);
    }
    deletefromcart(cart: ICartItem) {
        return this.http.post(this.apiUrl + `api/cart/deletefromcart`, cart);
    }
    minusfromcart(cart: ICartItem) {
        return this.http.post(this.apiUrl + `api/cart/minusfromcart`, cart);
    }
    addcartitem(cart: ICartItem) {
        return this.http.post(this.apiUrl + `api/cart/addcartitem`, cart);
    }
}