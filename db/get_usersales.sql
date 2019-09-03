SELECT * FROM tracks t
JOIN purchases p on t.track_id = p.track_id
WHERE t.user_id = $1;