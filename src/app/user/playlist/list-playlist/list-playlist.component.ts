import { Component, OnInit } from '@angular/core';
import {Playlist} from '../../../model/playlist';
import {PlaylistService} from '../../../service/playlist.service';

@Component({
  selector: 'app-list-playlist',
  templateUrl: './list-playlist.component.html',
  styleUrls: ['./list-playlist.component.css']
})
export class ListPlaylistComponent implements OnInit {
  playlist: Playlist[] = [];
  constructor(
    private playlistService: PlaylistService
  ) {
  }

  ngOnInit() {
    this.getAllPlayList();
  }

  getAllPlayList() {
    this.playlistService.getAll().subscribe(playLists => {
      this.playlist = playLists;
    });
  }
}
