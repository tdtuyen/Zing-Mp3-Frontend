import { Component, OnInit } from '@angular/core';
import {Artist} from "../../../model/artist";
import {ArtistService} from "../../../service/artist.service";

@Component({
  selector: 'app-feature-artits',
  templateUrl: './feature-artits.component.html',
  styleUrls: ['./feature-artits.component.css']
})
export class FeatureArtitsComponent implements OnInit {

  artists: Artist[] = [];

  constructor(private artistService: ArtistService) {
  }

  ngOnInit() {
    this.getTopArtist();
  }

  getTopArtist() {
    this.artistService.getTopArtis().subscribe(artists=> {
      console.log(artists)
      this.artists = artists;
    },error => {console.log("error", error)});
  }
}
