SELECT track_name, base_price, exclusive_price FROM tracks t
JOIN purchases p on t.track_id = p.track_id
WHERE t.user_id = $1;
