import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../service/authentication.service";
import {SongService} from "../../../service/song.service";
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators
} from '@angular/forms';

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

  songForm: FormGroup;

  constructor(private auth: AuthenticationService, private songService: SongService,
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
    this.songForm = this.fb.group({
      nameSong: ['', [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required, Validators.min(1)]],
      imageUrl: [],
      songUrl: [],
      album: [],
    })
  };

  submit() {
    this.submitted = true;
    if (this.songForm.valid) {
      const song = this.songForm.value;
      this.songService.saveSong(song).subscribe(() => {
        this.songForm.reset();
        this.success = true;
        this.submitted = false;
      }, e => {
        console.log(e);
      });
    }
    this.success = false;
  }

}
