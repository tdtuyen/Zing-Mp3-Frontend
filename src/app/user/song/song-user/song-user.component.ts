import {Component, OnDestroy, OnInit} from '@angular/core';
import {Song} from '../../../model/song';
import {SongService} from '../../../service/song.service';
import {Router} from '@angular/router';
import {ListenMusicService} from '../../listen-music.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-song-user',
  templateUrl: './song-user.component.html',
  styleUrls: ['./song-user.component.css']
})
export class SongUserComponent implements OnInit, OnDestroy  {

  songs: Song[] = [];
  song: Song;
  id: number;
  subscription: Subscription;

  constructor(private songService: SongService, private router: Router,
              private listenMusicService: ListenMusicService) {

  }

  ngOnInit() {
    this.getYourSong();
  }

  getYourSong() {
    this.songService.getYourSong().subscribe(songs => {
      this.songs = songs;
    }, error => {
      console.log('error', error);
    });
  }

  deleteSong(id: number) {
    this.songService.deleteSong(id).subscribe(song => {
      this.song = song;
      this.getYourSong();
      }, error => {
      console.log('error', error);
    });
  }
  getInforSong(song) {
    this.listenMusicService.statusSong.next(true);
    this.listenMusicService.songObject.next(song);
    this.listenMusicService.openFile(song);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
