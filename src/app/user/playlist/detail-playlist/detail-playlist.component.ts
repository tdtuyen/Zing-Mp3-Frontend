import { Component, OnInit } from '@angular/core';
import {PlaylistService} from '../../../service/playlist.service';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Song} from '../../../model/song';
import {Playlist} from '../../../model/playlist';

@Component({
  selector: 'app-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styleUrls: ['./detail-playlist.component.css']
})
export class DetailPlaylistComponent implements OnInit {
  id?: number;
  playlistSong: Song[] = [];
  playlist1: Playlist[] = [];
  constructor(private playlist: PlaylistService,
              private httClient: HttpClient,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
    //   this.id = +paramMap.get('id');
    //   // this.getAllComment(this.id);
    //   // this.getAllSongInPlaylist()
    // });
    this.getAllSongInPlaylist(10);
  }
  getAllSongInPlaylist(id: number) {
    this.playlist.findById(10).subscribe(song => {
      this.playlistSong = song.songs;
    } );
  }
}
