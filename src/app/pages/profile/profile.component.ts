import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
})

export class ProfilePage {
    constructor(private userService: UserService, private route: ActivatedRoute) {

    }
    user: IUser
    ngOnInit() {
        this.userService.getUser().subscribe(user => {
            this.user = user
        })
    }
}