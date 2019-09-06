SELECT COUNT(t.track_id)as soldcount, t.track_id, t.upload_date, track_name, base_price, exclusive_price, t.exclusive FROM tracks t
JOIN purchases p on t.track_id = p.track_id
WHERE t.user_id = $1
GROUP BY t.track_id;