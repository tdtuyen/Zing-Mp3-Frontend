import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [HomeLayoutComponent],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        SharedModule
    ]
})
export class LayoutModule { }
