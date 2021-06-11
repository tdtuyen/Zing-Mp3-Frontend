import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { QuicklinkComponent } from './quicklink/quicklink.component';


@NgModule({
    declarations: [NavbarComponent, HeaderComponent, FooterComponent, BannerComponent, QuicklinkComponent, BannerComponent],
    exports: [
        NavbarComponent,
        FooterComponent,
        BannerComponent,
        QuicklinkComponent,
      BannerComponent
    ],
    imports: [
        CommonModule,
        SharedRoutingModule
    ]
})
export class SharedModule { }
