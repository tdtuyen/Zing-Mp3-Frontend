import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PlaylistService} from '../../../service/playlist.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Playlist} from '../../../model/playlist';
import {Commentplaylist} from '../../../model/commentplaylist';
import {Likeplaylist} from '../../../model/likeplaylist';

@Component({
  selector: 'app-comment-playlist',
  templateUrl: './comment-playlist.component.html',
  styleUrls: ['./comment-playlist.component.css']
})
export class CommentPlaylistComponent implements OnInit {
  success: boolean;
  submitted = false;
  commentplaylists: Commentplaylist[] = [];
  playlistSong: Playlist = {
    likes:null,
    songs:null
  };
  commentForm: FormGroup;
  likePlaylist: Likeplaylist = {
    // isLike:null,
  };
  id?: number;
  statusLike : boolean;
  // @ts-ignore
  @ViewChild('likeElement') likeElement : ElementRef;
  constructor(private playlistService: PlaylistService,
              private httClient: HttpClient,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.commentForm = this.fb.group({
      content: ['', [Validators.required, Validators.max(200)]],
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getAllComment(this.id);
      this.getPlaylist(this.id);
      this.handleLike(this.id);
    });
    // this.playlistService.likePlaylist(this.id).subscribe(likePlaylist =>{
    //   this.likePlaylist = likePlaylist;
    //   console.log('contructor:',this.likePlaylist.isLike);
    //   // this.statusLike = this.likePlaylist.isLike;
    // })
  }

  getAllComment(id: number) {
    this.playlistService.allCommentInPlaylist(id).subscribe(comment => {
      this.commentplaylists = comment;
    });
  }

  getPlaylist(id: number) {
    this.playlistService.findById(id).subscribe(playlist => {
      this.playlistSong = playlist;
    });
  }

  getPostComment(id: number) {
    this.submitted = true;
    if (this.commentForm.valid) {
      const comment = this.commentForm.value;
      this.playlistService.postComment(comment, id).subscribe(() => {
        this.success = true;
        this.submitted = false;
        this.commentForm.reset();
        this.getAllComment(id);
      })
    }
  }
  handleLike(id: number) {
    this.likePlaylist.isLike = !this.likePlaylist.isLike;
    if(this.likePlaylist.isLike){
      this.likeElement.nativeElement.style.color = 'red';
    }else{
      this.likeElement.nativeElement.style.color = 'black';
    }
    this.playlistService.likePlaylist(id).subscribe(newLikePL =>{
      console.log('update success');
      console.log(this.likePlaylist.isLike);
      this.getPlaylist(id);
    })
  }
}
