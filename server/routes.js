require("dotenv").config();
const express = require('express');
const stripeLoader = require('stripe');
const { Secret } = process.env;
const router = express.Router();

const stripe = new stripeLoader(Secret);

const charge = (token, amount) => {
    return stripe.charges.create({
        amount: amount * 100,
        currency: 'usd',
        source: token,
        description: 'Statement Description'
    })
}

router.post('/api/buy', async (req, res, next ) => {
    try{
        let data = await charge(req.body.token.id, req.body.amount)
        console.log(data)
        res.send('Charged');
    }catch(e){
        console.log(e)
        res.sendStatus(500);
    }
})

module.exports = router;