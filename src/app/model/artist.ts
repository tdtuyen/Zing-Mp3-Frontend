import {Song} from './song';

export interface Artist {
  id?: number;
  nameArtist?: string;
  description?: string;
  avatar?: string;
  songUrl?: Song[];
  dob?: Date;
  likes?: number;
  gender?: string;

}
