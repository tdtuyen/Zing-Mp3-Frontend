import {Song} from './song';

export interface Playlist {
  id?: number;
  namePlaylist?: string;
  description?: string;
  image?: string;
  createAt?: Date;
  genre?: any;
  editAt?: any;
  status?: boolean;
  views?: number;
  likes?: number;
  songs?: Song[];
}
