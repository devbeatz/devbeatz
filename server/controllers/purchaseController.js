module.exports = {
    make: async (req, res) => {
        const { user_id } = req.session.user;
        const { track_id, exclusive } = req.body;
        const db = req.app.get('db');
        await db.record_purchase([track_id, user_id, exclusive])
        if(exclusive){
            await db.make_exclusive([track_id]);
        }
        console.log(db[0]);
        res.sendStatus(200);
    },
    userSales: async (req, res) => {
        console.log(req.session.user.user_id);
        const { user_id } = req.session.user;
        const db = req.app.get('db');
        const userSales = await db.get_usersales([user_id])
        res.status(200).send(userSales);
    },
    userBought: async (req, res) => {
        const { user_id } = req.session.user;
        const db = req.app.get('db')
        const userPurchases = await db.get_userbought([user_id]);
        res.status(200).send(userPurchases);
    }
}