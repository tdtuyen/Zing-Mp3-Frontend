export interface Song {
  id?: number;
  nameSong?: String;
  description?: String;
  imageUrl?: String;
  songUrl?: String;
  album?: String;
  author?: string;
  likes?: number;
  views?: number;
  artists?: {
    nameArtist : String,
    likes: number
  };
  genre?: number;
}
