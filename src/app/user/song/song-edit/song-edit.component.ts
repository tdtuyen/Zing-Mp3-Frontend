import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../service/authentication.service";

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})
export class SongEditComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  avatar = '';
  files = '';
  onChangeAvatar($event) {
    this.avatar = $event;
    console.log('avatar ===>', this.avatar);
  }
  onChangeFile($event) {
    this.files = $event;
    console.log('files ===>', this.files);
  }

  ngOnInit(): void {
  }

}
