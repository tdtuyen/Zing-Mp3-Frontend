import { Component, OnInit, DoCheck } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListenMusicService} from '../../listen-music.service';
import {Song} from '../../../model/song';


@Component({
  selector: 'app-song-play',
  templateUrl: './song-play.component.html',
  styleUrls: ['./song-play.component.css']
})
export class SongPlayComponent implements OnInit {
  inforSong: any;
  song: Song;
  status = true;
  constructor(private route: ActivatedRoute, private listenMusicService: ListenMusicService) {
    this.listenMusicService.songObject.asObservable().subscribe(song => {
      this.song = song;
    });
  }
  play() {
    this.status ? this.listenMusicService.play() : this.listenMusicService.pause();
    this.status = !this.status;
  }
  ngOnInit() {
  }


  setVolume(event: Event) {
    this.listenMusicService.setVolume(event);
  }
}
