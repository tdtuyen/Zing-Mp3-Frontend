import { Component, OnInit } from '@angular/core';
import {Playlist} from '../../../model/playlist';
import {PlaylistService} from '../../../service/playlist.service';

@Component({
  selector: 'app-top-playlist',
  templateUrl: './top-playlist.component.html',
  styleUrls: ['./top-playlist.component.css']
})
export class TopPlaylistComponent implements OnInit {
  topPlaylists: Playlist[] = [];
  constructor(private playlistService: PlaylistService) { }

  ngOnInit() {
    this.getTopView();
  }
  getTopView() {
    this.playlistService.getTop10PlayListSong().subscribe(views => {
      this.topPlaylists = views;
    });
  }
}
