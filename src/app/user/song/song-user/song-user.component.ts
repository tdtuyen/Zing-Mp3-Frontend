import { Component, OnInit } from '@angular/core';
import {Song} from '../../../model/song';
import {SongService} from '../../../service/song.service';
import {Router} from '@angular/router';
import {ListenMusicService} from '../../listen-music.service';

@Component({
  selector: 'app-song-user',
  templateUrl: './song-user.component.html',
  styleUrls: ['./song-user.component.css']
})
export class SongUserComponent implements OnInit {
  songs: Song[] = [];

  constructor(private songService: SongService, private router: Router,
              private listenMusicService: ListenMusicService) {
  }

  ngOnInit() {
    this.getYourSong();
  }

  getYourSong() {
    this.songService.getYourSong().subscribe(songs => {
      console.log(songs);
      this.songs = songs;
    }, error => {console.log('error', error); });
  }

  getInforSong(song) {
    this.listenMusicService.statusSong.next(true);
    this.listenMusicService.songObject.next(song);
    this.listenMusicService.openFile(song);
  }
}
