INSERT INTO purchases (track_id, user_id, exclusive, upload_date)
VALUES ($1, $2, $3, CURRENT_TIMESTAMP);

UPDATE tracks
SET sell_count = sell_count + 1
WHERE track_id = $1;