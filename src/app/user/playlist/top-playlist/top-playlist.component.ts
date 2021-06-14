import { Component, OnInit } from '@angular/core';
import {Playlist} from '../../../model/playlist';
import {PlaylistService} from '../../../service/playlist.service';

@Component({
  selector: 'app-top-playlist',
  templateUrl: './top-playlist.component.html',
  styleUrls: ['./top-playlist.component.css']
})
export class TopPlaylistComponent implements OnInit {
  playlists: Playlist[] = [];
  constructor(private playlistService: PlaylistService) { }

  ngOnInit() {
    this.getTopView();
  }
  getTopView() {
    this.playlistService.getTop10PlaylistNew().subscribe(views => {
      this.playlists = views;
    });
  }
}
