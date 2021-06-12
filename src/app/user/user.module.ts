import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {FeatureArtitsComponent} from './artist/feature-artits/feature-artits.component';
import {TopSongComponent} from "./song/top-song/top-song.component";
import {TreandingSongsComponent} from "./song/treanding-songs/treanding-songs.component";
import {ArtistModule} from './artist/artist.module';
import {NewPlaylistComponent} from './playlist/new-playlist/new-playlist.component';
import {TopPlaylistComponent} from './playlist/top-playlist/top-playlist.component';
import {AblumComponent} from './ablum/ablum.component';
import {SongModule} from "./song/song.module";
import {SongDetailComponent} from "./song/song-detail/song-detail.component";
import {SongDeleteComponent} from "./song/song-delete/song-delete.component";
import {SongListComponent} from "./song/song-list/song-list.component";
import {SongEditComponent} from "./song/song-edit/song-edit.component";
import {SongCreateComponent} from "./song/song-create/song-create.component";


@NgModule({
  declarations: [NewPlaylistComponent,
    TopPlaylistComponent,
    AblumComponent,
    FeatureArtitsComponent,
    TopSongComponent,
    TreandingSongsComponent,
    SongDetailComponent,
    SongDeleteComponent,
    SongListComponent,
    SongEditComponent,
    SongCreateComponent],
  exports: [
    FeatureArtitsComponent,
    TopSongComponent,
    TreandingSongsComponent,
    NewPlaylistComponent,
    TopPlaylistComponent,
    AblumComponent,
    SongDetailComponent,
    SongDeleteComponent,
    SongListComponent,
    SongEditComponent,
    SongCreateComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ],

})
export class UserModule {
}
