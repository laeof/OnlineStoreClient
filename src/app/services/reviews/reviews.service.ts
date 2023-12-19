import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { AuthService } from "../auth/auth.service";
import { ApiService } from "../api/api.service";

@Injectable({
    providedIn: 'root'
})

export class ReviewsService {
    apiUrl: string;

    constructor(private http: HttpClient, private apiService: ApiService, private authService: AuthService) {
        this.apiUrl = apiService.getApiUrl() + 'api/reviews/';
    }
}