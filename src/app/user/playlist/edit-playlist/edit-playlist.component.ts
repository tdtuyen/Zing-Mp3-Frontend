import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';
import {HttpClient} from '@angular/common/http';
import {PlaylistService} from '../../../service/playlist.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Playlist} from '../../../model/playlist';
import {GenreService} from '../../../service/genre.service';
import {Genre} from '../../../model/genre';

@Component({
  selector: 'app-edit-playlist',
  templateUrl: './edit-playlist.component.html',
  styleUrls: ['./edit-playlist.component.css']
})
export class EditPlaylistComponent implements OnInit {
  success: boolean;
  submitted = false;
  avatar = '';
  genres: Genre[] = [];
  playlistForm: FormGroup = new FormGroup({
    namePlaylist: new FormControl('', [Validators.required, Validators.minLength(6)]),
    type: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl('')
  });
  id?: number;
  constructor(private httClient: HttpClient,
              private afStorage: AngularFireStorage,
              private playlistService: PlaylistService,
              private router: Router, private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private genreService: GenreService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getPlaylists(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllGenre();
    this.playlistForm = this.fb.group({
      namePlaylist: ['', [Validators.required, Validators.min(6), Validators.max(10)]],
      genre: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['']
    });
  }
  onChangeAvatar($event) {
    this.avatar = $event;
    console.log('avatar ===>', this.avatar);
  }
  getPlaylists(id: number) {
    return this.playlistService.findById(id).subscribe(playlists => {
      this.playlistForm = new FormGroup({
        namePlaylist: new FormControl(playlists.namePlaylist, [Validators.required, Validators.minLength(6)]),
        genre: new FormControl(playlists.genre),
        description: new FormControl(playlists.description),
        image: new FormControl(playlists.image)
      });
    });
  }
  editPlayList(id: number): any {
    alert('test');
    this.submitted = true;
    if (this.playlistForm.valid) {
      const playlist = this.playlistForm.value;
      playlist.image = this.avatar;
      playlist.genre = {
        id: playlist.genre
      };
      console.log(playlist);
      this.playlistService.editPlaylists(this.id, playlist).subscribe(() => {
        console.log(this.playlistForm);
        alert('thành công');
        this.success = true;
        this.submitted = false;
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
