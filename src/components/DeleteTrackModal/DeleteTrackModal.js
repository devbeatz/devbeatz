import React, { useState, useEffect } from "react";
import "./DeleteTrackModal.scss";
import { connect } from "react-redux";
import { deleteTrack } from "../../redux/reducers/trackReducer";
import { Modal } from "react-bootstrap";

function EditTrackModal(props) {
  const handleSubmit = () => {
    props.deleteTrack(props.deleteId);
    props.onHide();
  };

  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        autoFocus
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div id="logo">Delete</div>
            <h1>BEAT</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="register-form">
            <h4>
              Are you sure you want to delete this track? This cannot be undone.
            </h4>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleSubmit}>Delete</button>
          <button onClick={props.onHide}>Cancel</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default connect(
  undefined,
  { deleteTrack }
)(EditTrackModal);
