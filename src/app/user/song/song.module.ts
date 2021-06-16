import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongRoutingModule } from './song-routing.module';
import {FormsModule} from '@angular/forms';
import {UploadModule} from '../../upload/upload.module';
import { SongUserComponent } from './song-user/song-user.component';
import { SongPlayComponent } from './song-play/song-play.component';
import { AddSongComponent } from './add-song/add-song.component';


@NgModule({
  declarations: [AddSongComponent],
    imports: [
        CommonModule,
        SongRoutingModule,
        FormsModule,
        UploadModule,
    ]
})
export class SongModule { }
