import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import { ILogin } from 'src/app/models/login';
import { CookieOptions, CookieService } from 'ngx-cookie-service';
import { IUser } from 'src/app/models/user';

interface LoginResponse {
    token: string
}
const requestOptions = {
    withCredentials: true // Включаем передачу куки
};
@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
    public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

    apiUrl: string;

    constructor(private http: HttpClient, private apiServce: ApiService, @Inject(CookieService) private cookieService: CookieService) {
        this.apiUrl = apiServce.getApiUrl() + 'api/account/';
        this.isLoggedIn().subscribe(isLoggedIn => {
            this.isAuthenticatedSubject.next(isLoggedIn);
        });
    }

    login(login: ILogin): Observable<any> {
        return this.http.post<any>(this.apiUrl + `login`, login, requestOptions)
            .pipe(
                tap(response => {
                    this.isAuthenticatedSubject.next(true);
                })
            );
    }

    logout(): Observable<any> {
        return this.http.post<any>(this.apiUrl + `logout`, null, requestOptions)
            .pipe(
                tap(response => {
                    this.isAuthenticatedSubject.next(false);
                })
            )
    }

    isLoggedIn(): Observable<boolean> {
        return this.http.get<boolean>(this.apiUrl + `check-auth`, requestOptions);
    }
}