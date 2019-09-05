const { AWSAccessKeyId, AWSSecretKey, Bucket } = process.env;
const AWS = require('aws-sdk')

module.exports = {
    getall: async (req, res) => {
        const db = req.app.get('db')
        const tracks = await db.get_tracks();
        if(req.query.genre){
            console.log(req.query.genre)
            const tracksByGenre = await db.get_by_genre([req.query.genre])
            return res.status(200).json(tracksByGenre)
        }
        return res.status(200).send(tracks);
    },
    create: async (req, res) => {
        const { track_url, track_name, base_price, exclusive_price, genre } = req.body;
        console.log(req.body)
        const { user_id } = req.session.user;
        const db = req.app.get('db');
        const userTracks = await db.create_track([user_id, track_url, track_name, base_price, exclusive_price]);
        console.log(userTracks)
        let id = userTracks[0].track_id
        console.log(id)
        for(let i = 0; i < genre.length; i++){
            await db.add_genre(id, genre[i]);
        }
        res.status(200).send(userTracks);
    },
    update: async (req, res) => {
        const { field_name, field_value} = req.body;
        const { id } = req.params;
        const db = req.app.get('db');
        db.tracks.update({track_id: id}, {[field_name]: field_value}).then(response => {
            res.status(200).send(response);
        })
    },
    delete: async (req, res) => {
        const { id } = req.params;
        const db = req.app.get('db')
        const newTrackfeed = db.delete_track([id]);
        res.status(200).json(newTrackfeed);
    },
    getUserTracks: async (req, res) => {
        const { user_id } = req.session.user;
        console.log(req.session.user.user_id);
        console.log(user_id);
        const db = req.app.get('db')
        const userTracks = await db.get_user_tracks([user_id]);
        const userBought = await db.get_userbought([user_id]);
        const userSoldTracks = await db.get_usersales([user_id]);
        res.status(200).send({
            User_Tracks: userTracks,
            User_Bought: userBought,
            User_Sales: userSoldTracks
        });
    },
    getTopFive: async (req, res) => {
        const db = req.app.get('db');
        console.log('hit')
        const topPurchased = await db.get_topfiveID();
        const ids = topPurchased.map(val => {
            return val.track_id;
        })
        const topFiveTracks = await db.get_topfivetracks([ids[0], ids[1], ids[2], ids[3], ids[4],])
        console.log(ids)
        res.status(200).send(topFiveTracks)
    }
}