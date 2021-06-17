import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {PlaylistService} from '../../../service/playlist.service';
import {Playlist} from '../../../model/playlist';
import {Router} from '@angular/router';
import {Genre} from '../../../model/genre';
import {GenreService} from '../../../service/genre.service';
import {AuthenticationService} from '../../../service/authentication.service';
import {ArtistService} from '../../../service/artist.service';

declare var $: any;
declare var Swal: any;
const isValidated = true;
const artistId: number = null;
@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {
  success: boolean;
  submitted = false;
  avatar = '';
  genres: Genre[] = [];
  playlistForm: FormGroup;

  constructor(private auth: AuthenticationService, private playlistService: PlaylistService,
              private artistService: ArtistService, private genreService: GenreService,
              private fb: FormBuilder) {

  }
  onChangeAvatar($event) {
    this.avatar = $event;
    console.log('avatar ===>', this.avatar);
  }
  ngOnInit(): void {
    this.getAllGenre();
    this.playlistForm = this.fb.group({
      namePlaylist: ['', [Validators.required, Validators.max(30)]],
      description: ['', [Validators.required, Validators.max(500)]],
      genre: ['', [Validators.required]],
      image: ['']
    });
  }

  createSong() {
    this.submitted = true;
    if (this.playlistForm.valid) {
      const playlists = this.playlistForm.value;
      playlists.image = this.avatar;
      playlists.genre = {
        id: playlists.genre
      };
      console.log(playlists);
      this.playlistService.createNewPlaylist(playlists).subscribe(() => {
        this.success = true;
        this.submitted = false;
        this.playlistForm.reset();
        // tslint:disable-next-line:only-arrow-functions
        $(function() {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });


          Toast.fire({
            icon: 'success',
            type: 'success',
            title: ' Successful song creation',
          });
        });
      }, e => {
        console.log(e);
      });
    }
    this.success = false;
  }
  getAllGenre() {
    this.genreService.getAll().subscribe(genres => {
      this.genres = genres;
    });
  }

  resetForm() {
    this.playlistForm.reset();
  }
}

