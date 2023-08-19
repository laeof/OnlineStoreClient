import { Component } from '@angular/core'
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api/api.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
    user: IUser;
    constructor(private router: Router, public apiService: ApiService, public authService: AuthService, private userService: UserService) {
        this.picUrl = apiService.getApiUrl();
        userService.getUser().subscribe({
            next: (user: any) => {
                this.user = user;
                console.log(user)
            },
            error: (error: any) => {
                console.error('Ошибка при получении пользователя', error);
            }
        });
    }
    picUrl: string;
    redirectToHome(): void {
        this.router.navigate(['/']);
    }
}