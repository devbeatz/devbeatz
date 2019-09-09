import React, { useState, useEffect } from "react";
import "./EditTrackModal.scss";
import { connect } from "react-redux";
import { updateTrack } from "../../redux/reducers/trackReducer";
import { Modal } from "react-bootstrap";

function EditTrackModal(props) {
  const [trackName, setTrackName] = useState("");
  const [basePrice, setBasePrice] = useState(0);
  const [exclusivePrice, setExclusivePrice] = useState(0);
  const [trackInfo, setTrackInfo] = useState({});

  useEffect(() => {
    console.log(props.trackInfo);

    setTrackInfo(props.trackInfo);
    setTrackName(props.trackInfo.track_name);
    setBasePrice(props.trackInfo.base_price);
    setExclusivePrice(props.trackInfo.exclusive_price);
  }, []);

  const handleSubmit = () => {
    let track = { ...trackInfo };
    track.base_price = basePrice;
    track.exclusive_price = exclusivePrice;
    track.track_name = trackName;
    props.updateTrack(track.track_id, track);
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
            <div id="logo">Edit</div>
            <h1>BEAT</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="register-form">
            <h3>Track Name</h3>
            <input
              value={trackName}
              onChange={e => setTrackName(e.target.value)}
              type="text"
            />
            <h3>Base Price</h3>
            <input
              value={basePrice}
              onChange={e => setBasePrice(e.target.value)}
              type="text"
            />
            <h3>Exclusive Price</h3>
            <input
              value={exclusivePrice}
              onChange={e => setExclusivePrice(e.target.value)}
              type="text"
            />
            <p />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleSubmit}>Submit Changes</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function mapStateToProps(reduxState) {
  return {
    userUploaded: reduxState.track.userUploaded
  };
}

export default connect(
  mapStateToProps,
  { updateTrack }
)(EditTrackModal);
