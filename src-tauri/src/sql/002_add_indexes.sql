CREATE INDEX idx_albums_artist_id ON albums(artist_id);
CREATE INDEX idx_tracks_artist_id ON tracks(artist_id);
CREATE INDEX idx_tracks_album_id ON tracks(album_id);
CREATE INDEX idx_playlist_tracks_track_id ON playlist_tracks(track_id);
