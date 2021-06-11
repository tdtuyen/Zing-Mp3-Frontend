import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongRoutingModule } from './song-routing.module';
import { TopSongComponent } from './top-song/top-song.component';
import { TreandingSongsComponent } from './treanding-songs/treanding-songs.component';


@NgModule({
  declarations: [TreandingSongsComponent],
  imports: [
    CommonModule,
    SongRoutingModule,
  ]
})
export class SongModule { }
