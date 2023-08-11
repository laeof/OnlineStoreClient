import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
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
                public authService: AuthService) { }

    redirectToHome(): void {
        this.router.navigate(['/']);
    }
    isModalOpen = false;

    openModal() {
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }
}