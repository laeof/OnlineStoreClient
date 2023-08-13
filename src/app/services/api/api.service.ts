import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    private apiUrl = 'http://localhost:5000/';
    //private apiUrl = 'https://laoef.apels1n.tech/';

    getApiUrl() {
        return this.apiUrl;
    }

    setApiUrl(value: string) {
        this.apiUrl = value;
    }
}