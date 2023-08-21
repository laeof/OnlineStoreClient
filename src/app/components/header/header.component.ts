import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/category';
import { ApiService } from 'src/app/services/api/api.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { ModalService } from 'src/app/services/modal/modal.service';

interface Elements {
    sidebar: HTMLElement | null;
    overlay: HTMLElement | null;
    togglebtn: HTMLElement | null;
    body: HTMLElement;
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    constructor(private router: Router,
        public modalService: ModalService,
        public authService: AuthService,
        public apiService: ApiService,
        private categoryService: CategoryService) {
        this.picUrl = apiService.getApiUrl();
        this.categoryService.getAll().subscribe(category => {
            this.categories = category
        })
    }
    categories: ICategory[]
    picUrl: string;
    redirectToHome(): void {
        this.router.navigate(['/']);
    }

    redirectToCatalog() {
        this.router.navigate(['/Catalog'])
    }

    redirectToCategory(id: string) {
        const randomParam = new Date().getTime();
        this.router.navigate(['/Categories/' + id]);
    }

    redirectToCabinet(): void {
        this.router.navigate(['/Cabinet']);
    }

    redirectToCart(): void {
        this.router.navigate(['/Cart']);
    }

    redirectToAdmin(): void {
        this.router.navigate(['/Admin']);
    }

    isModalOpen = false;

    openModal() {
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }
}