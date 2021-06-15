import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../service/authentication.service";
import {Artist} from "../../../model/artist";
import {Genre} from "../../../model/genre";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SongService} from "../../../service/song.service";
import {ArtistService} from "../../../service/artist.service";
import {GenreService} from "../../../service/genre.service";

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})
export class SongEditComponent implements OnInit {

  success: boolean;
  submitted = false;
  avatar = '';
  files = '';
  artists: Artist[] = []
  genres: Genre[] = []
  songForm: FormGroup;


  constructor(private auth: AuthenticationService, private songService: SongService,
              private artistService: ArtistService, private genreService: GenreService,
              private fb: FormBuilder) {
  }


  onChangeAvatar($event) {
    this.avatar = $event;
    console.log('avatar ===>', this.avatar);
  }

  onChangeFile($event) {
    this.files = $event;
    console.log('files ===>', this.files);
  }

  ngOnInit(): void {
    this.getAllGenre();
    this.getAllArtist();
    this.songForm = this.fb.group({
      nameSong: ['', [Validators.required]],
      description: ['', [Validators.required]],
      author: ['', [Validators.required]],
      artist: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      imageUrl: [''],
      songUrl: [''],
      album: ['', [Validators.required]],
    })
  };

  editSong() {
    this.submitted = true;
    if (this.songForm.valid) {
      const song = this.songForm.value;
      song.imageUrl = this.avatar;
      song.songUrl = this.files;
      song.artist = {
        id: song.artist
      }
      song.genre = {
        id: song.genre
      }
      console.log(song);
      this.songService.saveSong(song).subscribe(() => {
        console.log(this.songForm)
        this.success = true;
        this.submitted = false;
      }, e => {
        console.log(e);
      });
    }
    this.songForm.reset();
    this.success = false;
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
