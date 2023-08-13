import { Component } from '@angular/core'
import { ApiService } from 'src/app/services/api/api.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
    constructor(public apiService: ApiService) {
        this.picUrl = apiService.getApiUrl();
    }
    picUrl: string;
}