SELECT t.track_url, t.track_name, t.exclusive_price, t.base_price, t.exclusive,  u.username FROM tracks t
JOIN users u on t.user_id = u.user_id
WHERE track_id = 4 or track_id = 8 or track_id = 9 or track_id = 12 or track_id = 13;