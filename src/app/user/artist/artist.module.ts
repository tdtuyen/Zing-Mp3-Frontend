import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { CommentArtistComponent } from './comment-artist/comment-artist.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CommentArtistComponent],
    imports: [
        CommonModule,
        ArtistRoutingModule,
        ReactiveFormsModule
    ]
})
export class ArtistModule { }
