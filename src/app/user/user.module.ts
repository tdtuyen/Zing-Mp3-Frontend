import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FeatureArtitsComponent } from './artist/feature-artits/feature-artits.component';
import {TopSongComponent} from './song/top-song/top-song.component';
import {TreandingSongsComponent} from './song/treanding-songs/treanding-songs.component';
import {NewPlaylistComponent} from './playlist/new-playlist/new-playlist.component';
import {TopPlaylistComponent} from './playlist/top-playlist/top-playlist.component';
import {AblumComponent} from './ablum/ablum.component';
import {CreatePlaylistComponent} from './playlist/create-playlist/create-playlist.component';
import {EditPlaylistComponent} from './playlist/edit-playlist/edit-playlist.component';
import {ListPlaylistComponent} from './playlist/list-playlist/list-playlist.component';


@NgModule({
  declarations: [NewPlaylistComponent,
    TopPlaylistComponent,
    AblumComponent,
    FeatureArtitsComponent,
    TopSongComponent,
    TreandingSongsComponent,
    CreatePlaylistComponent,
    EditPlaylistComponent,
    ListPlaylistComponent
  ],
  exports: [
    FeatureArtitsComponent,
    TopSongComponent,
    TreandingSongsComponent,
    NewPlaylistComponent,
    TopPlaylistComponent,
    AblumComponent,
    CreatePlaylistComponent,
    EditPlaylistComponent,
    ListPlaylistComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ],

})
export class UserModule { }
