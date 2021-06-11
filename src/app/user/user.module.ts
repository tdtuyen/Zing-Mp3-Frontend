import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FeatureArtitsComponent } from './artist/feature-artits/feature-artits.component';
import {TopSongComponent} from "./song/top-song/top-song.component";
import {TreandingSongsComponent} from "./song/treanding-songs/treanding-songs.component";


@NgModule({
  declarations: [FeatureArtitsComponent,TopSongComponent,TreandingSongsComponent],
  exports: [
    FeatureArtitsComponent,
    TopSongComponent,
    TreandingSongsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
