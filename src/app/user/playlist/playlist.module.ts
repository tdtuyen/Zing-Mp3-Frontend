import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import {NewPlaylistComponent} from './new-playlist/new-playlist.component';
import {TopPlaylistComponent} from './top-playlist/top-playlist.component';
import {CreatePlaylistComponent} from './create-playlist/create-playlist.component';
import {EditPlaylistComponent} from './edit-playlist/edit-playlist.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [],
  exports: [
  ],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PlaylistModule { }
