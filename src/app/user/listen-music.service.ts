import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

import * as moment from 'moment';
import {Song} from '../model/song';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListenMusicService {
  public statusSong: Subject<any> = new Subject<boolean>();
  public song: Observable<Song>;
  public songObject: BehaviorSubject<Song>;
  maxInput: number;
  constructor(private http: HttpClient) {
    this.songObject = new BehaviorSubject<Song>(JSON.parse(localStorage.getItem('song')));
    this.song = this.songObject.asObservable();
  }
  audioObj = new Audio();
  audioEvents = [
    'ended',
    'error',
    'play',
    'playing',
    'pause',
    'timeupdate',
    'canplay',
    'loadedmetadata',
    'loadstart'
  ];
  title = 'AudioApp';
  files = [
    {
      url: './assets/LamLem_HaiSam.mp3',
      name: 'Lấm lem'
    },
    {
      url: './assets/docthan.mp3',
      name: 'Độc thân'
    },
    {
      url: './assets/CoEmDoiBongVui.mp3',
      name: 'Có em bên đời bỗng vui'
    },
  ];
  currentTime = '00:00:00';
  duration = '00:00:00';
  seek = 0;
  removeEvent(obj, events, handlerr) {
    events.forEach(event => {
      obj.removeEventListener(event, handlerr);
    });
  }

  streamObserver(url: string): Observable<any> {
    return new Observable(observer => {
      console.log('vao stream');
      this.audioObj.src = url;
      this.audioObj.load();
      this.audioObj.play();
      // this.duration = this.audioObj.duration;
      const handler = (eventTarget: Event) => {
        this.seek = this.audioObj.currentTime;
        this.duration = this.timeFormat(this.audioObj.duration);
        this.currentTime = this.timeFormat(this.audioObj.currentTime);
        const hms = this.duration;   // your input string
        const a = hms.split(':'); // split it at the colons
        this.maxInput = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
      };
      this.addEvent(this.audioObj, this.audioEvents, handler);
      return () => {
        this.audioObj.pause();
        this.audioObj.currentTime = 0;
        this.removeEvent(this.audioObj, this.audioEvents, handler);
      };
    });
  }

  addEvent(obj, events, handlerr: any) {
    // tslint:disable-next-line:no-shadowed-variable
    events.forEach( element => {
      obj.addEventListener(element, handlerr); // Khi nay e de sai tham so element thanh events
      // trong khi events da foreach o tren
      // console.log(handler);
    });
  }

  setVolume(event) {
    this.audioObj.volume = event.target.value;
  }
  openFile(song: Song) {
    this.streamObserver(song.songUrl).subscribe(event => {
      this.songObject.next(song);
    });
    // console.log(url);
  }
  play() {
    this.audioObj.play().then().catch(error => console.log('error:', error));
  }

  pause() {
    this.audioObj.pause();
  }

  stop() {
    this.audioObj.pause();
    this.audioObj.currentTime = 0;
  }
  timeFormat(time, format= 'HH:mm:ss') {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }
  setSeekTo(ev) {
    this.audioObj.currentTime = ev.target.value;
  }
  getStatusSong(): Observable<any> {
    return this.statusSong.asObservable();
  }
}
