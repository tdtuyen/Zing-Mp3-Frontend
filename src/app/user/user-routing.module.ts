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
import {AuthGuard} from '../helper/auth-guard';
import {UserEditComponent} from './user-edit/user-edit.component';
import {SongUserComponent} from "./song/song-user/song-user.component";


const routes: Routes = [
  {
    path: 'edit' ,
    component: UserEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'playlists/create' ,
    component: CreatePlaylistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'playlists/edit' ,
    component: EditPlaylistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'yourplaylists' ,
    component: ListPlaylistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'playlist/delete' ,
    component: EditPlaylistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'songs/detail/:id',
    component: SongDetailComponent,
  },
  {
    path: 'yoursongs',
    component: SongUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'songs/edit/:id',
    component: SongEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'songs/create',
    component: SongCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'songs/delete/:id',
    component: SongDeleteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'songs',
    component: SongListComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
