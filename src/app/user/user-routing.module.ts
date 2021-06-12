import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreatePlaylistComponent} from './playlist/create-playlist/create-playlist.component';
import {EditPlaylistComponent} from './playlist/edit-playlist/edit-playlist.component';
import {ListPlaylistComponent} from './playlist/list-playlist/list-playlist.component';


const routes: Routes = [
  {
    path: 'playlist/create' ,
    component: CreatePlaylistComponent
  },
  {
    path: 'playlist/edits' ,
    component: EditPlaylistComponent
  },
  {
    path: 'playlist/list' ,
    component: ListPlaylistComponent
  },
  {
    path: 'playlist/delete' ,
    component: EditPlaylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
