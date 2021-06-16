import { Component, OnInit } from '@angular/core';
import {Song} from "../../../model/song";
import {SongService} from "../../../service/song.service";
import {Artist} from "../../../model/artist";
import {Genre} from "../../../model/genre";
import {ArtistService} from "../../../service/artist.service";
import {GenreService} from "../../../service/genre.service";

@Component({
  selector: 'app-top-song',
  templateUrl: './top-song.component.html',
  styleUrls: ['./top-song.component.css']
})
export class TopSongComponent implements OnInit {

  songs: Song[] = [];
  artists: Artist[] = []
  genres: Genre[] = []
  constructor(private songService: SongService,
              private artistService: ArtistService, private genreService: GenreService,) {
    this.getAllGenre();
    this.getAllArtist();
  }

  ngOnInit() {
    this.getTopSong();
  }

  getTopSong() {
    this.songService.getTopSong().subscribe(songs=> {
      this.songs = songs;
    },error => {console.log("error", error)});
  }

  getAllArtist() {
    this.artistService.getAll().subscribe(artists => {
      this.artists = artists;
    })
  }

  getAllGenre() {
    this.genreService.getAll().subscribe(genres => {
      this.genres = genres;
    })
  }
}
