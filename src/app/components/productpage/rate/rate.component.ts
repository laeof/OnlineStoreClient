import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent {
  stars: number[] = [0, 0, 0, 0, 0];

  constructor(public apiService: ApiService) {
    this.picUrl = apiService.getApiUrl();
  }

  notFixed = true;

  maxRating: number = 5;
  @Input() hoveredStars: number;

  picUrl: string;

  onStarHover(star: number): void {
    this.hoveredStars = star;
  }

  onMouseLeave(): void {
    if (!this.notFixed) {
      this.hoveredStars = 0;
    }
  }
}
