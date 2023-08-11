import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs"
import { IProduct } from "../../models/products"
import { AuthService } from "../auth/auth.service";
import { IUser } from "src/app/models/user";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    user: IUser
    constructor(private http: HttpClient, private authService: AuthService) {

    }

    getUser(): Observable<IUser> {
        return this.http.get<IUser>('https://localhost:5000/api/account/currentuser')
    }
}