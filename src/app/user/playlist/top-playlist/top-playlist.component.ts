import { Component, OnInit } from '@angular/core';
import {Playlist} from '../../../model/playlist';
import {PlaylistService} from '../../../service/playlist.service';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-top-playlist',
  templateUrl: './top-playlist.component.html',
  styleUrls: ['./top-playlist.component.css']
})
export class TopPlaylistComponent implements OnInit {
  customOptions: OwlOptions= {
    lazyLoad: false,
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
  topPlaylists: Playlist[] = [];
  constructor(private playlistService: PlaylistService) { }

  ngOnInit() {
    this.getTopView();
  }
  getTopView() {
    this.playlistService.getTop10PlayListSong().subscribe(views => {
      this.topPlaylists = views;
    });
  }
}
