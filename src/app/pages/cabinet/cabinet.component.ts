import { Component, OnInit } from '@angular/core'
import { Emitters } from 'src/app/emmiters/emmiters'
import { IProduct } from 'src/app/models/products'
import { IUser } from 'src/app/models/user'
import { ModalService } from 'src/app/services/modal/modal.service'
import { NavigationSettingsService } from 'src/app/services/navigation-settings/navigation_settings.service'
import { ProductsService } from 'src/app/services/products/products.service'
import { UserService } from 'src/app/services/user/user.service'

@Component({
    selector: 'app-cabinet',
    templateUrl: './cabinet.component.html',
    styleUrls: ['./cabinet.component.scss']
})

export class CabinetPage {
    user: IUser = {
        id: null,
        firstName: null,
        lastName: null,
        email: null,
        gender: null,
        role: null,
        phoneNumber: null,
    }
    constructor(private userService: UserService, 
                private navigationService: NavigationSettingsService) {
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
    ngOnInit(): void {
        this.navigationService.setNavigation();
    }
}