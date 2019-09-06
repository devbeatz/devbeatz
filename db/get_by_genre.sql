SELECT *, u.username FROM tracks t
JOIN genre g on t.track_id = g.track_id
JOIN users u on t.user_id = u.user_id
WHERE genre = $1;