import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import {NewPlaylistComponent} from './new-playlist/new-playlist.component';
import {TopPlaylistComponent} from './top-playlist/top-playlist.component';
import {CreatePlaylistComponent} from './create-playlist/create-playlist.component';
import {EditPlaylistComponent} from './edit-playlist/edit-playlist.component';


@NgModule({
  declarations: [],
  exports: [
  ],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
  ]
})
export class PlaylistModule { }
