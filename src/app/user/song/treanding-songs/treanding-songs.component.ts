import { Component, OnInit } from '@angular/core';
import {Song} from "../../../model/song";
import {SongService} from "../../../service/song.service";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-treanding-songs',
  templateUrl: './treanding-songs.component.html',
  styleUrls: ['./treanding-songs.component.css']
})
export class TreandingSongsComponent implements OnInit {

  songs: Song[] = [];

  constructor(private songService: SongService) {
  }

  ngOnInit() {
    this.getNewSong();
    this.songs;
  }

  getNewSong() {
    this.songService.getNewSong().subscribe(songs=> {
      this.songs = songs;
    },error => {console.log("error", error)});
  }


}
