import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { ModalLoginComponent } from './modalLogin.component';
import { ModalResetComponent } from './reset-password/modalReset.component';

@NgModule({
  declarations: [
    LoginComponent,
    ModalLoginComponent,
    ResetPasswordComponent,
    ModalResetComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
