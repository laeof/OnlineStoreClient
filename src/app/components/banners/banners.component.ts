import { Component, ElementRef, HostListener, ViewChild } from '@angular/core'
import { ApiService } from 'src/app/services/api/api.service';
import { SliderService } from 'src/app/services/slider/slider.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})

export class BannersComponent {
  constructor(public apiService: ApiService) {
    this.picUrl = apiService.getApiUrl();
  }
  picUrl: string;

}