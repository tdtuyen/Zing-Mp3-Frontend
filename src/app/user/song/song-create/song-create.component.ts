import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../service/authentication.service";
import {SongService} from "../../../service/song.service";
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {ArtistService} from "../../../service/artist.service";
import {Artist} from "../../../model/artist";
import {Genre} from "../../../model/genre";
import {GenreService} from "../../../service/genre.service";

@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.css']
})
export class SongCreateComponent implements OnInit {

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

  createSong() {
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
