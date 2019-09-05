DELETE FROM tracks
WHERE track_id = $1;
SELECT * FROM tracks t
JOIN  users u on u.user_id = t.user_id
WHERE t.track_id = $1;
