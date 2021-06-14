import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Playlist} from '../model/playlist';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(API_URL + `/playlists/list`);
  }

  createNewPlaylisst(playlist: Playlist): Observable<Playlist> {
    return this.http.post<Playlist>(API_URL + `/playlists`, playlist);
  }

  getTop10PlaylistNew(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>('http://localhost:8080/playlists/ratings');
  }

  getTop10PlayListSong(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(API_URL + `playlists/topview`);
  }
}
