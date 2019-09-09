SELECT DISTINCT g.track_id, t.track_name, t.track_url, t.base_price, t.exclusive_price, u.username FROM genre g
JOIN tracks t on g.track_id = t.track_id
JOIN users u on t.user_id = u.user_id
WHERE g.genre = $1;