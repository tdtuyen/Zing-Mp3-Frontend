import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AblumComponent } from './ablum/ablum.component';


@NgModule({
  declarations: [AblumComponent],
  exports: [
    AblumComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
