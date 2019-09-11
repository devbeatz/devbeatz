import React, { useState } from "react";
import axios from "axios";
import "../LoginRegister/LoginRegister.scss";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import StripeForm from "./StripeForm";
import {
  StripeProvider,
  Elements,
  CardElement,
  injectStripe,
  ReactStripeElements
} from "react-stripe-elements";

function PurchaseBeat(props) {
  const { username, setUsername } = useState("");
  const { Amount, setAmount } = useState("");
  const submitHandler = async e => {
    e.preventDefault();
  };

  return (
    <StripeProvider apiKey="pk_test_D0JnQs1F7G5CW50T65dMn5Lc00cwr1mrqX">
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        autofocus
      >
        <Modal.Header closeButton id="closeButton">
          <Modal.Title>
            <div>Purchase</div>
            <h1>{props.track_name}</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Elements>
            <StripeForm
              base={props.base_price}
              exclusive={props.exclusive_price}
              track_name={props.track_name}
              track_id={props.track_id}
              onHide={props.onHide}
            />
          </Elements>
        </Modal.Body>
      </Modal>
    </StripeProvider>
  );
}
export default PurchaseBeat;
