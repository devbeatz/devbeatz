INSERT INTO tracks ( user_id, track_url, track_name, base_price, exclusive_price)
VALUES ($1, $2, $3, $4, $5);
SELECT * FROM tracks
WHERE user_id = $1;