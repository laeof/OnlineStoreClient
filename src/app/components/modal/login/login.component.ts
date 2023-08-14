import { Component, Input, OnInit, NgModule } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ILogin } from '../../../models/login'
import { ApiService } from 'src/app/services/api/api.service';
import { IRegister } from 'src/app/models/register';


@Component({
  selector: 'app-modal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  @Input() title: string

  showLoginForm = true;
  showRegisterForm = false;

  loginData: ILogin = {
    email: '',
    password: ''
  }
  registerData: IRegister = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  }

  constructor(public modalService: ModalService,
    private authService: AuthService,
    public apiService: ApiService) {
    this.picUrl = apiService.getApiUrl();
  }
  picUrl: string;

  ngOnInit(): void {
  }

  toggleForm() {
    this.showLoginForm = !this.showLoginForm;
    this.showRegisterForm = !this.showRegisterForm;
  }
  onLoginClick(loginData: ILogin): void {
    this.authService.login(loginData).subscribe({
      next: (response: any) => {
        console.log('Успешный вход', response);
        this.modalService.close();
      },
      error: (error: any) => {
        console.log('Ошибка входа', error);
      }
    });
  }
  onRegisterClick(registerData: IRegister): void {
    this.authService.register(registerData).subscribe({
      next: (response: any) => {
        console.log('successful register', response);
        this.modalService.close();
      },
      error: (error: any) => {
        console.log('Register error', error);
      }
    });
  }
}