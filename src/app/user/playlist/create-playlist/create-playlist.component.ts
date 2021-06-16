import {Component, OnInit} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import {PlaylistService} from '../../../service/playlist.service';
import {Playlist} from '../../../model/playlist';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {
  avatar = '';
  playlistForm: FormGroup = new FormGroup({
    namePlaylist: new FormControl('', [Validators.required, Validators.minLength(6)]),
    type: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl('')
  });
  submitted: boolean;

  constructor(private httClient: HttpClient,
              private afStorage: AngularFireStorage,
              private playlistService: PlaylistService,
              private router: Router, private fb: FormBuilder) {
  }

  onChangeAvatar($event) {
    this.avatar = $event;
    console.log('avatar ===>', this.avatar);
  }

  ngOnInit(): void {
    this.playlistForm = this.fb.group({
      namePlaylist: ['', [Validators.required, Validators.min(6), Validators.max(10)]],
      type: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['']
    });
  }
  createPlayList(): any {
    this.submitted = true;
    console.log(this.playlistForm);
    if (this.playlistForm.valid) {
      const playlist: Playlist = {
        namePlaylist: this.playlistForm.value.namePlaylist,
        type: this.playlistForm.value.type,
        description: this.playlistForm.value.description,
        image: this.avatar
      };
      this.playlistService.createNewPlaylist(playlist).subscribe(() => {
        this.submitted = false;
      }, error => console.log('error:', error)); }
  }
}
