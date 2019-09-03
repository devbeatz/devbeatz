UPDATE tracks
SET $1 = $2
WHERE track_id = $3
SELECT * FROM tracks
WHERE track_id = $3;
