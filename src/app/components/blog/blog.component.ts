import { Component } from '@angular/core'
import { ApiService } from 'src/app/services/api/api.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})

export class BlogComponent {
    constructor(public apiService: ApiService) {
        this.picUrl = apiService.getApiUrl();
    }
    picUrl: string;
}