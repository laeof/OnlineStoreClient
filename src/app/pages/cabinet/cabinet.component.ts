import { Component, OnInit } from '@angular/core'
import { Emitters } from 'src/app/emmiters/emmiters'
import { IProduct } from 'src/app/models/products'
import { IUser } from 'src/app/models/user'
import { ModalService } from 'src/app/services/modal/modal.service'
import { ProductsService } from 'src/app/services/products/products.service'
import { UserService } from 'src/app/services/user/user.service'

@Component({
    selector: 'app-cabinet',
    templateUrl: './cabinet.component.html',
})

export class CabinetPage {
    
    constructor(private userService: UserService) {
        userService.getUser().subscribe({
            next: (user: IUser) => {
                console.log(user);
            },
            error: (error: any) => {
                console.error('Ошибка при получении пользователя', error);
            }
        });
    }
}