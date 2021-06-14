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
import {UserEditComponent} from './user-edit/user-edit.component';
import {AuthGuard} from '../helper/auth-guard';


const routes: Routes = [
  {
    path: 'edit' ,
    component: UserEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'playlist/create' ,
    component: CreatePlaylistComponent
  },
  {
    path: 'playlist/edit' ,
    component: EditPlaylistComponent
  },
  {
    path: 'playlist' ,
    component: ListPlaylistComponent
  },
  {
    path: 'playlist/delete' ,
    component: EditPlaylistComponent
  },
  {
    path: 'songs',
    component: SongDetailComponent,
  },
  {
    path: 'songs/list',
    component: SongListComponent,
  },
  {
    path: 'songs/edit',
    component: SongEditComponent,
  },
  {
    path: 'songs/create',
    component: SongCreateComponent,
  },
  {
    path: 'songs/delete',
    component: SongDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
