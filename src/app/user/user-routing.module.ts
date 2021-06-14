import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SongDetailComponent} from './song/song-detail/song-detail.component';
import {SongListComponent} from './song/song-list/song-list.component';
import {SongCreateComponent} from './song/song-create/song-create.component';
import {SongEditComponent} from './song/song-edit/song-edit.component';
import {SongDeleteComponent} from './song/song-delete/song-delete.component';
import {CreatePlaylistComponent} from './playlist/create-playlist/create-playlist.component';
import {EditPlaylistComponent} from './playlist/edit-playlist/edit-playlist.component';
import {ListPlaylistComponent} from './playlist/list-playlist/list-playlist.component';
import {NewPlaylistComponent} from './playlist/new-playlist/new-playlist.component';


const routes: Routes = [
  {
    path: 'playlists/create' ,
    component: CreatePlaylistComponent
  },
  {
    path: 'playlists/edits' ,
    component: EditPlaylistComponent
  },
  {
    path: 'playlists/list' ,
    component: ListPlaylistComponent
  },
  {
    path: 'playlists/delete' ,
    component: EditPlaylistComponent
  },
  {
    path: 'user/playlists/ratings' ,
    component: NewPlaylistComponent
  },
  {
    path: 'songs',
    component: SongDetailComponent,
  },
  {
    path: 'list',
    component: SongListComponent,
  },
  {
    path: 'edit',
    component: SongEditComponent,
  },
  {
    path: 'create',
    component: SongCreateComponent,
  },
  {
    path: 'delete',
    component: SongDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
