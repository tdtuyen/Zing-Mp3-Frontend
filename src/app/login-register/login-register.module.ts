import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisterRoutingModule } from './login-register-routing.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
    imports: [
        CommonModule,
        LoginRegisterRoutingModule,
        ReactiveFormsModule
    ],
  exports: [LoginComponent, RegisterComponent]
})
export class LoginRegisterModule { }
