import { Component, OnInit } from '@angular/core';
import {Song} from "../../../model/song";
import {SongService} from "../../../service/song.service";

@Component({
  selector: 'app-top-song',
  templateUrl: './top-song.component.html',
  styleUrls: ['./top-song.component.css']
})
export class TopSongComponent implements OnInit {

  songs: Song[] = [];

  constructor(private songService: SongService) {
  }

  ngOnInit() {
    this.getTopSong();
  }

  getTopSong() {
    this.songService.getTopSong().subscribe(songs=> {
      this.songs = songs;
    },error => {console.log("error", error)});
  }

}
