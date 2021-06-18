import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PlaylistService} from '../../../service/playlist.service';
import {Song} from '../../../model/song';
import {SongService} from '../../../service/song.service';

@Component({
  selector: 'app-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styleUrls: ['./detail-playlist.component.css']
})
export class DetailPlaylistComponent implements OnInit {
  id?: number;

  playlistForm: FormGroup = new FormGroup({

    image: new FormControl('')
  });
  constructor(private playlistService: PlaylistService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getPlaylists(this.id);
    });
  }

  ngOnInit() {
  }

  getPlaylists(id: number) {
    return this.playlistService.findById(id).subscribe(playlists => {
      this.playlistForm = new FormGroup({
        namePlaylist: new FormControl(playlists.namePlaylist, [Validators.required, Validators.minLength(6)]),
        type: new FormControl(playlists.genre),
        description: new FormControl(playlists.description),
        image: new FormControl(playlists.image),
        createAt: new FormControl(playlists.createAt)
      });
    });
  }
}
