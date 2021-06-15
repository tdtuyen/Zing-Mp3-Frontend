import { Injectable } from '@angular/core';
import {Song} from "../model/song";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

const API_URL = `${environment.apiUrl}`;


@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(API_URL + '/songs');
  }

  getTopSong(): Observable<any> {
    return this.http.get<any>(API_URL + '/songs/top');
  }

  getTopView(): Observable<any> {
    return this.http.get<any>(API_URL + '/songs/views');
  }

  saveSong(song: Song): Observable<Song> {
    return this.http.post<Song>(API_URL + '/songs', song);
  }


  findById(id: number): Observable<Song> {
    return this.http.get<Song>(`${API_URL}/songs/${id}`);
  }

  updateSong(id: number, song: Song): Observable<Song> {
    return this.http.put<Song>(`${API_URL}/songs/${id}`, song);
  }

  deleteSong(id: number): Observable<Song> {
    return this.http.get<Song>(`${API_URL}/songs/delete/${id}`);
  }
}
