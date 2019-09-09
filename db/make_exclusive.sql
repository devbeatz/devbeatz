UPDATE tracks
SET exclusive = true
WHERE track_id = $1;