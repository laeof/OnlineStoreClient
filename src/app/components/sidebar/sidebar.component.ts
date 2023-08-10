import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
    constructor(private router: Router) { }
    redirectToHome(): void {
        this.router.navigate(['/']);
    }
}