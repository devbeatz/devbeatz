require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const auth = require('./controllers/authController');
const tracks = require('./controllers/trackController');
//const purchases = require('./controllers/purchaseController');/

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

const app = express();

app.use(express.json())
app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 2
    }
  }))
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected');
})
//auth
app.post('/auth/register', auth.register);
app.post('/auth/login', auth.login);
app.get('/auth/logout', auth.logout);

//track
app.get('/tracks/getall', tracks.getall);
app.get('/tracks/getuser', tracks.getUserTracks);
//app.get('/tracks/getusersold', track.getUserSold);
//app.get('/tracks/getuserbought', tracks.getUserBought);
app.post('/tracks/create', tracks.create);
app.delete('/tracks/delete/:id', tracks.delete);
app.put('/tracks/update/:id', tracks.update);

//purchase
//app.post('/purchases/make', purchases.make);
//app.get('/purchases/userSales', purchases.userSales);
//app.get('/purchases/userBought', purchases.userBought);


app.listen(SERVER_PORT, () => console.log(`listening on port: ${SERVER_PORT}`));