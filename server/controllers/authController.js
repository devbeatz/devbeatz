const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const { username, email, password } = req.body;
        const db = req.app.get('db');
        const result = await db.get_user([email]);
        const existingUser = result[0];
        if(existingUser){
            return res.status(409).json('Username taken');
        }
        const hash = await bcrypt.hash(password, 10);
        const registeredUser = db.register_user([username, email, hash]);
        let user = registeredUser[0];
        req.session.user = {
            username: user.username,
            email: user.email
        }
        return res.status(201).send(req.session.user);
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        const db = req.app.get('db');
        const founduser = await db.get_user([email]);
        const user = founduser[0];
        if(!user){
            res.status(401).json('User not found please register before trying to login');
        }
        const isAuthenticated = bcrypt.compareSync(password, user.password);
        if(!isAuthenticated){
            res.status(409).json('incorrect password');
        }
        req.session.user = {
            username: user.username,
            email: user.email
        }
        return res.send(req.session.user);
    },
    logout: async (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}