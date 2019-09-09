require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const auth = require("./controllers/authController");
const tracks = require("./controllers/trackController");
const purchases = require("./controllers/purchaseController");
const sign_s3 = require("./controllers/awsController");
const router = require('./routes');
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, Secret } = process.env;

const app = express();

app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 2
    }
  })
);
massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db connected");
});

app.use("/sign_s3", sign_s3.sign_s3);

//auth
app.post("/auth/register", auth.register);
app.post("/auth/login", auth.login);
app.get("/auth/logout", auth.logout);

//track
app.get("/api/tracks/getall", tracks.getall);
app.get("/api/tracks/getuser", tracks.getUserTracks);
app.get("/api/tracks/topfive", tracks.getTopFive);
app.post("/api/tracks/create", tracks.create);
app.delete("/api/tracks/delete/:id", tracks.delete);
app.put("/api/tracks/update/:id", tracks.update);

//purchase
app.post("/api/purchases/make", purchases.make);
app.get("/api/purchases/userSales", purchases.userSales);
app.get("/api/purchases/userBought", purchases.userBought);
app.use(router);

app.listen(SERVER_PORT, () => console.log(`listening on port: ${SERVER_PORT}`));
