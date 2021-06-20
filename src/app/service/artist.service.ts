import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Artist} from '../model/artist';
import {Commentplaylist} from '../model/commentplaylist';
import {Likeplaylist} from '../model/likeplaylist';
import {CommentArist} from '../model/comment-arist';
import {LikeArist} from '../model/like-arist';

const API_URL = `${environment.apiUrl}`;


@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Artist[]> {
    return this.http.get<Artist[]>(API_URL + '/artists');
  }

  getTopArtis(): Observable<Artist[]> {
    return this.http.get<Artist[]>(API_URL + '/artists/top');
  }

  saveArtist(artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(API_URL + '/artists', artist);
  }


  findById(id: number): Observable<Artist> {
    return this.http.get<Artist>(`${API_URL}/artists/${id}`);
  }

  updateArtis(id: number, artist: Artist): Observable<Artist> {
    return this.http.put<Artist>(`${API_URL}/artists/${id}`, artist);
  }

  deleteArtis(id: number): Observable<Artist> {
    return this.http.get<Artist>(`${API_URL}/artists/delete/${id}`);
  }

  allCommentInArtist(id: number): Observable<any> {
    return this.http.get<CommentArist[]>(`${API_URL}/comments/artists/${id}`);
  }

  postComment(comment: CommentArist, id: number): Observable<CommentArist> {
    return this.http.post<CommentArist>(`${API_URL}/comments/artists/${id}`, comment);
  }

  likeArtist(id: number): Observable<LikeArist> {
    return this.http.post<LikeArist>(`${API_URL}/likes/artists/${id}`, id);
  }
  statusLike(id: number): Observable<LikeArist> {
    return this.http.get<LikeArist>(`${API_URL}/likes/artists/${id}`);
  }
}
