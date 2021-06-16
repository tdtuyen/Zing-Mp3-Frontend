import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Playlist} from '../model/playlist';
import {Song} from '../model/song';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }

  getAll(page: number, size: number): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(API_URL + `/playlists/list?page=${page}&size=${size}`);
  }

  createNewPlaylisst(playlist: Playlist): Observable<Playlist> {
    return this.http.post<Playlist>(API_URL + `/playlists/create`, playlist);
  }

  getTop10PlaylistNew(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(API_URL + `/playlists/news`);
  }

  getTop10PlayListSong(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(`${API_URL}/playlists/topview`);
  }
  myPlaylists(): Observable<any> {
    return this.http.get<Playlist[]>(`${API_URL}/playlists/myplaylists`);
  }

  editPlaylists(p: number, id: Playlist): Observable<any> {
    // @ts-ignore
    return this.http.get<Playlist[]>(`${API_URL}/playlists/${id}`, p);
  }
  findById(id: number): Observable<Playlist> {
    return this.http.get<Song>(`${API_URL}/playlists/detail/${id}`);
  }
}
