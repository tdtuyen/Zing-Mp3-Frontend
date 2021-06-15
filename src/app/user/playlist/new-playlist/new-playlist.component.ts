import { Component, OnInit } from '@angular/core';
import {Playlist} from '../../../model/playlist';
import {PlaylistService} from '../../../service/playlist.service';

@Component({
  selector: 'app-new-playlist',
  templateUrl: './new-playlist.component.html',
  styleUrls: ['./new-playlist.component.css']
})
export class NewPlaylistComponent implements OnInit {
  newPlaylists: Playlist[] = [];
  constructor(private playlistService: PlaylistService) { }

  ngOnInit() {
    this.getNewPlaylist();
  }

  getNewPlaylist() {
    this.playlistService.getTop10PlaylistNew().subscribe(playlists => {
      this.newPlaylists = playlists;
    });
  }
}
