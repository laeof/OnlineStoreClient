import { Component } from '@angular/core'
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
    constructor(private router: Router, public apiService: ApiService) {
        this.picUrl = apiService.getApiUrl();
    }
    picUrl: string;
    redirectToHome(): void {
        this.router.navigate(['/']);
    }
}