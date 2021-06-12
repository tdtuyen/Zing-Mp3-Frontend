import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongRoutingModule } from './song-routing.module';
import { TopSongComponent } from './top-song/top-song.component';
import { TreandingSongsComponent } from './treanding-songs/treanding-songs.component';
import { SongCreateComponent } from './song-create/song-create.component';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { SongListComponent } from './song-list/song-list.component';
import { SongDeleteComponent } from './song-delete/song-delete.component';
import { SongEditComponent } from './song-edit/song-edit.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [TreandingSongsComponent,
    SongCreateComponent,
    SongDetailComponent,
    SongListComponent,
    SongDeleteComponent,
    SongEditComponent],
  imports: [
    CommonModule,
    SongRoutingModule,
    FormsModule,
  ]
})
export class SongModule { }
