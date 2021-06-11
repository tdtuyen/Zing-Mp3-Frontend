import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {ArtistModule} from './artist/artist.module';
import {NewPlaylistComponent} from './playlist/new-playlist/new-playlist.component';
import {TopPlaylistComponent} from './playlist/top-playlist/top-playlist.component';


@NgModule({
  declarations: [NewPlaylistComponent, TopPlaylistComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
  exports: [
    NewPlaylistComponent,
    TopPlaylistComponent
  ]
})
export class UserModule { }
