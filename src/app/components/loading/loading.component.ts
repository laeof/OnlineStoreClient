import { Component } from '@angular/core'
import { ApiService } from 'src/app/services/api/api.service';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss']
})

export class LoadingComponent {
    constructor(public apiService: ApiService) {
        this.picUrl = apiService.getApiUrl();
    }
    picUrl: string;
}