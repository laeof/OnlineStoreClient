import { Component, OnInit } from '@angular/core'
import { Emitters } from 'src/app/emmiters/emmiters'
import { IProduct } from 'src/app/models/products'
import { IUser } from 'src/app/models/user'
import { ModalService } from 'src/app/services/modal/modal.service'
import { ProductsService } from 'src/app/services/products/products.service'
import { UserService } from 'src/app/services/user/user.service'

@Component({
    selector: 'app-personalinfo',
    templateUrl: './personalinfo.component.html',
    styleUrls: ['./personalinfo.component.scss']
})

export class PersonalInfoPage {
    
    user: IUser = {
        id: null,
        firstName: null,
        lastName: null,
        email: null,
        gender: null,
        role: null,
        phoneNumber: null,
    }
    constructor(private userService: UserService) {
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
}