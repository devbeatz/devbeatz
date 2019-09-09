import React, { useState } from 'react';
import axios from 'axios';
import {CardElement, injectStripe, ReactStripeElements} from 'react-stripe-elements';

function StripeForm(props){
    const [ username, setUsername ] = useState('');
    const [ Amount, setAmount ] = useState(props.base);
    const [ exclusive, toggleExclusive ] = useState(false)

    const submitHandler = async () => {
        console.log('submit hit')
        try{
            console.log('try hit')
            let { token } = await props.stripe.createToken({name: username})
            await fetch('/api/buy',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({token, Amount})
            })
            console.log(token)
        }catch (e){
            throw e;
            console.log(e)
        }
     //   axios.post('/api/purchases/make', { track_id, exclusive })
    }

    return(
        <form onSubmit={submitHandler}>
            <label>Name</label>
            <input 
                value={username}
                onChange={e => setUsername(e.target.value)}></input>

            <label>Exclusive: {props.exclusive}</label>
            <input
                value={exclusive}
                onChange={e => {
                    toggleExclusive(true);
                    setAmount(props.exclusive);
                }}
                type='checkbox'/>

            <h3>Total: {Amount}</h3>

            <CardElement />

            <button type='submit'>Confirm</button>
        </form>
    )
}
export default injectStripe(StripeForm);