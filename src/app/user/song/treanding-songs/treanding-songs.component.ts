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
  customOptions: OwlOptions= {
      loop: true,
      margin: 15,
      autoplay: false,
      smartSpeed: 1200,
    mouseDrag:false,
   touchDrag:false,
    pullDrag:false,
    dots:false,
    navSpeed:700,
      navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
      responsive: {
        0: {
          items: 1,
          nav:true,
        },
        600: {
          items: 3,
          nav: true,
        },
        1000: {
          items: 5,
          nav: true,
          loop: true,
          margin: 20
        }
      }
    }


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
