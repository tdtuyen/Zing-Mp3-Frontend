import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {PlaylistService} from '../../../service/playlist.service';
import {Playlist} from '../../../model/playlist';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {
  playlist: Playlist = {};
  playlistForm: FormGroup = new FormGroup({
    namePlaylist: new FormControl('', [Validators.required]),
    type: new FormControl(),
    description: new FormControl()
  });
  selectedFile: File;
  ref: AngularFireStorageReference;
  downloadURL: string;
  checkUploadAvatar = false;
  @Output()
  giveURLtoCreate = new EventEmitter<string>();
  @Output()
  sendAvatarUrl = new EventEmitter<string>();

  constructor(private httClient: HttpClient,
              private afStorage: AngularFireStorage,
              private playlistService: PlaylistService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    this.checkUploadAvatar = true;
    const id = Math.random().toString(36).substring(2); // upload file tao 1 string random
    this.ref = this.afStorage.ref(id);
    this.ref.put(this.selectedFile)
      .then(snapshot => {
        return snapshot.ref.getDownloadURL(); // tra ve  1 duong link download
      })
      .then(downloadURL => {
        this.downloadURL = downloadURL;
        this.giveURLtoCreate.emit(this.downloadURL);
        console.log(downloadURL);
        this.checkUploadAvatar = false;
        return downloadURL;
      })
      // tslint:disable-next-line:no-shadowed-variable
      .catch(error => {
        console.log(`Failed to upload avatar and get link -${error}`);
      });
  }

  createPlayList(): any {
    return this.playlistService.createNewPlaylisst(this.playlist).subscribe(() => {
      alert('Tạo thành công ');
      this.router.navigate(['/playlists']);
    });
  }
}
