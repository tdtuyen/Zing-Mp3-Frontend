import {Component, OnInit} from '@angular/core';
import {Song} from "../../../model/song";
import {SongService} from "../../../service/song.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  song?: Song;
  id?: number;

  constructor(private songService: SongService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getSong(this.id);
    });
  }

  ngOnInit() {
  }

  getSong(id: number) {
    console.log(this.songService.findById(id).toPromise())
    return this.songService.findById(id).toPromise();
  }
}
