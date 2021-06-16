import { Component, OnInit } from '@angular/core';
import {Song} from '../../../model/song';
import {SongService} from '../../../service/song.service';

@Component({
  selector: 'app-song-user',
  templateUrl: './song-user.component.html',
  styleUrls: ['./song-user.component.css']
})
export class SongUserComponent implements OnInit {

  songs: Song[] = [];

  constructor(private songService: SongService) {
  }

  ngOnInit() {
    this.getYourSong();
  }

  getYourSong() {
    this.songService.getYourSong().subscribe(songs=> {
      console.log(songs)
      this.songs = songs;
    },error => {console.log("error", error)});
  }

}
