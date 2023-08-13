import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable, map, tap } from "rxjs"
import { IProduct } from "../../models/products"
import { AuthService } from "../auth/auth.service";
import { IUser } from "src/app/models/user";
import { Emitters } from "src/app/emmiters/emmiters";
import { ApiService } from "../api/api.service";
const requestOptions = {
    withCredentials: true
};
@Injectable({
    providedIn: 'root'
})

export class UserService {
    user: IUser

    apiUrl: string;
    message: string;

    constructor(private http: HttpClient, private apiService: ApiService, private authService: AuthService) {
        this.apiUrl = apiService.getApiUrl() + 'api/user/';
    }

    getUser(): Observable<IUser> {
        return this.http.get<IUser>(this.apiUrl + 'current-user', requestOptions);
    }
}