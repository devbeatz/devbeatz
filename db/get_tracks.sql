SELECT * FROM tracks t
JOIN users u on t.user_id = u.user_id
WHERE exclusive = false;
