import { Component, Input, OnInit } from '@angular/core'
import { Route, Router } from '@angular/router'
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

export class CabinetComponent {
    @Input() user: IUser;

    constructor(private userService: UserService,
        private navigationService: NavigationSettingsService,
        private router: Router) {

    }
    ngOnInit(): void {
        this.navigationService.setNavigation();
    }

    redirectToPersonalInfo(): void {
        this.router.navigate(['/Cabinet/PersonalInfo']);
    }

    redirectToCart(): void {
        this.router.navigate(['/Cabinet/Cart']);
    }

    redirectToLikes() {
        this.router.navigate(['/Cabinet/WishList']);
    }
}