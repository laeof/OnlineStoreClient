import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface LoginResponse {
    token: string; // Добавьте другие свойства, если есть
}

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
    public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

    private apiUrl = 'https://localhost:5000/api/account/login/';

    constructor(private http: HttpClient) {
        this.isAuthenticatedSubject.next(!!this.getToken());
    }

    login(email: string, password: string): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${this.apiUrl}`, { email, password }).pipe(
            map(response => {
                if (response && response.token) {
                    localStorage.setItem('token', response.token);
                    this.isAuthenticatedSubject.next(true);
                }
                return response;
            })
        );
    }

    logout(): void {
        localStorage.removeItem('token');
        this.isAuthenticatedSubject.next(false);
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }
}