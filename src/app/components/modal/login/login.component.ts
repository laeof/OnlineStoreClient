import { Component, Input, OnInit, NgModule } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';


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

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
  }

  toggleForm() {
    this.showLoginForm = !this.showLoginForm;
    this.showRegisterForm = !this.showRegisterForm;
  }
}