import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/category';
import { IProduct } from 'src/app/models/products';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.scss']
})
export class PathComponent {
  @Input() category: ICategory;
  @Input() product: IProduct | null;
  constructor(public apiService: ApiService, private router: Router) {
    this.picUrl = apiService.getApiUrl();
  }
  picUrl: string;
  redirectToCategory(categoryId: string): void {
    this.router.navigate(['/Categories/', categoryId]);
}
}