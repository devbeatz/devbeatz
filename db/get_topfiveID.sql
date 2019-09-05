SELECT track_id , COUNT(track_id) FROM purchases
GROUP BY track_id
ORDER BY COUNT desc
limit 5;
