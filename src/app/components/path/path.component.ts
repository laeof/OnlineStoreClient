import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.scss']
})
export class PathComponent {
  constructor(public apiService: ApiService) {
    this.picUrl = apiService.getApiUrl();
  }
  picUrl: string;
}