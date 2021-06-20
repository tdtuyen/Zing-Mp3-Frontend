import { Component, OnInit } from '@angular/core';
import {Playlist} from '../../../model/playlist';
import {PlaylistService} from '../../../service/playlist.service';

@Component({
  selector: 'app-your-playlist',
  templateUrl: './your-playlist.component.html',
  styleUrls: ['./your-playlist.component.css']
})
export class YourPlaylistComponent implements OnInit {
  myPlaylist: Playlist[] = [];
  value?: any

  constructor(
    private playlistService: PlaylistService
  ) {
  }

  ngOnInit() {
    this.getAllPlayList();
  }

  getAllPlayList() {
    this.playlistService.myPlaylists().subscribe(playLists => {
      this.myPlaylist = playLists;
    });
  }
  searchPlaylist(): any{
    this.playlistService.searchPlaylisst(this.value).subscribe(playlist => {
      this.myPlaylist = playlist;
    })
  }

}
