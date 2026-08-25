import { Album, FetchAlbumResult } from '@/features/library/models/album';
import { getDb } from '@/lib/db';

export const fetchAlbums = async () => {
  const db = await getDb();
  const results = await db.select<FetchAlbumResult[]>(
    `select albums.id, albums.title, albums.release_year, artists.name as author,
            count(tracks.id) as track_count
     from albums
     left join artists on artists.id = albums.artist_id
     left join tracks on tracks.album_id = albums.id
     group by albums.id`,
  );
  return results.map(toAlbum);
};

const toAlbum = (d: FetchAlbumResult): Album => ({
  id: d.id,
  title: d.title,
  releaseYear: d.release_year,
  author: d.author,
  trackCount: d.track_count,
});
