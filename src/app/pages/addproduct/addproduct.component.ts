import { Component, OnInit } from '@angular/core'
import { Emitters } from 'src/app/emmiters/emmiters'
import { IProduct } from 'src/app/models/products'
import { IUser } from 'src/app/models/user'
import { ModalService } from 'src/app/services/modal/modal.service'
import { NavigationSettingsService } from 'src/app/services/navigation-settings/navigation_settings.service'
import { ProductsService } from 'src/app/services/products/products.service'
import { UserService } from 'src/app/services/user/user.service'

@Component({
    selector: 'app-addproduct',
    templateUrl: './addproduct.component.html',
})

export class AddProductPage {
    constructor(private userService: UserService, private navigationService: NavigationSettingsService) {
        
    }
    ngOnInit(): void {
        
    }
}