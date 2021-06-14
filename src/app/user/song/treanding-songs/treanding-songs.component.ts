import { Component, OnInit } from '@angular/core';
import {Song} from "../../../model/song";
import {SongService} from "../../../service/song.service";

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
    this.getTopView();
  }

  getTopView() {
    this.songService.getTopView().subscribe(songs=> {
      this.songs = songs;
    },error => {console.log("error", error)});
  }
}
