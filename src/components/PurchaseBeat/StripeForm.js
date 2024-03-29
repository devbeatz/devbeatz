import React, { useState } from "react";
import axios from "axios";
import {
  CardElement,
  injectStripe,
  ReactStripeElements
} from "react-stripe-elements";

function StripeForm(props) {
  const [username, setUsername] = useState("");
  const [Amount, setAmount] = useState(props.base);
  const [exclusive, toggleExclusive] = useState(false);

  const submitHandler = async () => {
    const { user_id } = props;
    props.onHide();
    try {
      let amount = Number(Amount.slice(1));
      let { token } = await props.stripe.createToken({
        name: username,
        id: user_id
      });
      console.log(token);
      await fetch("/api/buy", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ token, amount })
      });
    } catch (e) {
      throw e;
      console.log(e);
    }
    const { track_id } = props;
    console.log(track_id);
    axios.post("/api/purchases/make", { track_id, exclusive });
  };

  return (
    <form onSubmit={submitHandler}>
      <label style={{ paddingRight: "10px" }}>Name </label>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
      ></input>
      <label style={{ paddingLeft: "10px" }}>
        Buy Exclusive: {props.exclusive}
      </label>{" "}
      <input
        value={exclusive}
        onChange={e => {
          toggleExclusive(true);
          setAmount(props.exclusive);
        }}
        type="checkbox"
      />
      <h3 style={{ marginBottom: "10px" }}>Total: {Amount}</h3>
      <CardElement style={{ base: { color: "white" } }} />
      <a href={props.trackUrl} download>
        <button type="submit" style={{ marginTop: "10px" }}>
          Confirm
        </button>
      </a>
    </form>
  );
}
export default injectStripe(StripeForm);
