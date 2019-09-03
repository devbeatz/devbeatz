module.exports = {
    getall: async (req, res) => {
        const tracks = await req.app.get('db').get_tracks();
        res.status(200).send(tracks)
    },
    create: async (req, res) => {
        const { track_url, track_name, base_price, exclusive_price, genre } = req.body;
        const { user_id } = req.session.user;
        const db = await req.app.get('db').create_track([user_id, track_url, track_name, base_price, exclusive_price, genre]);
        res.sendStatus(200);
    },
    update: async (req, res) => {
        const { field_name, field_value} = req.body;
        const { id } = req.params;
        console.log(id)
        const db = req.app.get('db');
        db.tracks.update({track_id: id}, {[field_name]: field_value}).then(response => {
            res.status(200).send(response);
        })
    },
    delete: async (req, res) => {
        const { id } = req.params;
        const db = await req.app.get('db').delete_track([id]);
        res.sendStatus(200);
    },
    getUserTracks: async (req, res) => {
        const { user_id } = req.session.user;
        const userTracks = await req.app.get('db').get_user_tracks([user_id]);
        res.status(200).send(userTracks);
    },
    getUserBought: async (req, res) => {

    },
    getUserSold: async (req, res) => {

    }
}