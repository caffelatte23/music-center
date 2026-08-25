export type Album = {
  id: number;
  title: string;
  author: string;
  releaseYear: number;
  trackCount: number;
};

export type FetchAlbumResult = {
  id: number;
  title: string;
  release_year: number;
  author: string;
  track_count: number;
};
