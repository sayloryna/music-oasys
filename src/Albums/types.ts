export type Album = {
  id: number;
  name: string;
  artistName: string;
  coverUrl: string;
  format: string;
  price: number;
  originalPrice?: number;
  isAlbumOfTheMonth: boolean;
};
