import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent {
  constructor(public apiService: ApiService) {
    this.picUrl = apiService.getApiUrl();
  }
  picUrl: string;
}
