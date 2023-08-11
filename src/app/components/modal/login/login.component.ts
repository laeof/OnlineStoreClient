import { Component, Input, OnInit, NgModule } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-modal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  @Input() title: string

  phoneNumber: string = '';

  showLoginForm = true;
  showRegisterForm = false;
  email: string = ''; // Добавлено
  password: string = ''; // Добавлено

  constructor(public modalService: ModalService,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  toggleForm() {
    this.showLoginForm = !this.showLoginForm;
    this.showRegisterForm = !this.showRegisterForm;
  }
  onLoginClick(email: string, password: string): void {
    this.authService.login(email, password).subscribe(
      response => {
        console.log('Logged in successfully', response);
        this.modalService.close();
      },
      error => {
        console.error('Login error', error);
      }
    );
  }
}