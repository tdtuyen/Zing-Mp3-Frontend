import { Component, OnInit } from '@angular/core';
import {Song} from "../../../model/song";
import {SongService} from "../../../service/song.service";

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songs: Song[] = [];

  constructor(private songService: SongService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.songService.getAll().subscribe(songs=> {
      console.log(songs)
      this.songs = songs.content;
    },error => {console.log("error", error)});
  }

}
