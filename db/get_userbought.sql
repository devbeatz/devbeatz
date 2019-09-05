SELECT DISTINCT u.username, t.track_url, t.track_name, p.exclusive, t.base_price, t.exclusive_price FROM purchases p
JOIN tracks t on t.track_id = p.track_id
JOIN users u on t.user_id = u.user_id
WHERE p.user_id = $1;



