import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListenMusicService} from '../../listen-music.service';
import {Song} from '../../../model/song';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-song-play',
  templateUrl: './song-play.component.html',
  styleUrls: ['./song-play.component.css']
})
export class SongPlayComponent implements OnInit, OnDestroy  {
  inforSong: any;
  song: Song;
  status = true;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private listenMusicService: ListenMusicService) {
    this.listenMusicService.songObject.asObservable().subscribe(song => {
      this.song = song;
    });
    this.subscription = this.listenMusicService.getStatusSong().subscribe(status => {
      if (status) {
        this.status = false;
      }
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
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
