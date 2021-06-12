import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import {SharedModule} from '../shared/shared.module';
import {UserModule} from '../user/user.module';
import {LoginRegisterModule} from '../login-register/login-register.module';


@NgModule({
  declarations: [HomeLayoutComponent],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        SharedModule,
        UserModule,
        LoginRegisterModule
    ]
})
export class LayoutModule { }
