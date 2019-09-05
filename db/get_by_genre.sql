SELECT * FROM tracks t
JOIN genre g on t.track_id = g.track_id
WHERE genre = $1;