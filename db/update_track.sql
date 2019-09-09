UPDATE tracks
SET track_name = $1, base_price = $2, exclusive_price = $3
WHERE track_id = $4;
