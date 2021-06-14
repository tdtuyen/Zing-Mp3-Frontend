import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.css']
})
export class SongCreateComponent implements OnInit {

  constructor() { }

  avatar = '';
  files = '';

  ngOnInit() {
  }
  onChangeAvatar($event) {
    this.avatar = $event;
    console.log('avatar ===>', this.avatar);
  }
  onChangeFile($event) {
    this.files = $event;
    console.log('files ===>', this.files);
  }

}
