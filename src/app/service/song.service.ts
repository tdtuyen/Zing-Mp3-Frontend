import { Injectable } from '@angular/core';
import {Song} from '../model/song';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Playlist} from '../model/playlist';
import {Commentplaylist} from '../model/commentplaylist';
import {Likeplaylist} from '../model/likeplaylist';
import {CommentSong} from '../model/comment-song';
import {LikeSong} from '../model/like-song';

const API_URL = `${environment.apiUrl}`;


@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(API_URL + '/songs');
  }


  getYourSong(): Observable<any> {
    return this.http.get<any>(API_URL + '/songs/yoursongs');
  }

  getTopSong(): Observable<any> {
    return this.http.get<any>(API_URL + '/songs/top');
  }

  getNewSong(): Observable<any> {
    return this.http.get<any>(API_URL + '/songs/new');
  }

  saveSong(song: Song): Observable<Song> {
    return this.http.post<Song>(API_URL + '/songs', song);
  }


  findById(id: number): Observable<Song> {
    return this.http.get<Song>(`${API_URL}/songs/detail/${id}`);
  }

  updateSong(id: number, song: Song): Observable<Song> {
    return this.http.put<Song>(`${API_URL}/songs/${id}`, song);
  }

  deleteSong(id: number): Observable<Song> {
    return this.http.get<Song>(`${API_URL}/songs/${id}`);
  }
  findPlaylist(id: number): Observable<any> {
    return this.http.get<Playlist[]>(`${API_URL}/songs/${id}`);
  }
  allCommentInSong(id: number): Observable<any> {
    return this.http.get<CommentSong[]>(`${API_URL}/comments/songs/${id}`);
  }

  postComment(comment: CommentSong, id: number): Observable<CommentSong> {
    return this.http.post<CommentSong>(`${API_URL}/comments/songs/${id}`, comment);
  }

  likePlaylist(id: number): Observable<LikeSong> {
    return this.http.post<LikeSong>(`${API_URL}/likes/songs/${id}`, id);
  }


}
