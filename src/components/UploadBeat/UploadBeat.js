import React, { useState } from "react";
import axios from "axios";
import "../LoginRegister/LoginRegister.scss";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import { addTrack } from "../../redux/reducers/trackReducer";

function UploadBeat(props) {
  const [track_name, setName] = useState("");
  const [base_price, setBase] = useState("");
  const [exclusive_price, setExclusive] = useState("");
  const [genre, setGenre] = useState([]);
  const [trackInfo, setTrackInfo] = useState({});

  const onSubmit = () => {
    props.addTrack(trackInfo);
  };

  const onFilesChange = e => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    const fileparts = file.name.split(".");
    const fileName = fileparts[0];
    const fileType = fileparts[1];

    axios
      .post("/sign_s3", { fileName, fileType })
      .then(res => {
        const { returnData } = res.data.data;
        const signedRequest = returnData.signedRequest;
        console.log(signedRequest);
        const url = returnData.url;
        const options = {
          headers: {
            "Content-Type": fileType
          }
        };
        axios.put(signedRequest, file, options).then(res => {
          console.log("response from s3");
        });
        const track_url = url;
        const trackInfo = {
          track_url,
          track_name,
          base_price,
          exclusive_price,
          genre
        };

        setTrackInfo(trackInfo);
      })
      .catch(err => console.log(err));
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      autofocus
    >
      <Modal.Header closebutton>
        <Modal.Title>
          <div>New</div>
          <h1>BEATZ</h1>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form>
          <h4>New Beat</h4>
          <h3>Track Name</h3>
          <input
            value={track_name}
            onChange={e => setName(e.target.value)}
            type="text"
          />
          <h3>Base Price</h3>
          <input
            value={base_price}
            onChange={e => setBase(e.target.value)}
            type="number"
          />
          <h3>Exclusive Price</h3>
          <input
            value={exclusive_price}
            onChange={e => setExclusive(e.target.value)}
            type="number"
          />

          <h3>Genres</h3>
          <input
            onChange={e => setGenre([...genre, e.target.name])}
            type="checkbox"
            name="alternative"
          />
          <label for="alternative">Alternative</label>
          <input
            onChange={e => setGenre([...genre, e.target.name])}
            type="checkbox"
            name="Blues"
          />
          <label for="Blues">Blues</label>
          <input
            onChange={e => setGenre([...genre, e.target.name])}
            type="checkbox"
            name="Freestyle"
          />
          <label for="Freestyle">Freestyle</label>
          <input
            onChange={e => setGenre([...genre, e.target.name])}
            type="checkbox"
            name="Hip-Hop"
          />
          <label for="Hip-Hop">Hip-Hop</label>
          <input
            onChange={e => setGenre([...genre, e.target.name])}
            type="checkbox"
            name="Old School"
          />
          <label for="Old School">Old School</label>
          <input
            onChange={e => setGenre([...genre, e.target.name])}
            type="checkbox"
            name="Pop"
          />
          <label for="Pop">Pop</label>
          <input
            onChange={e => setGenre([...genre, e.target.name])}
            type="checkbox"
            name="R&B"
          />
          <label for="R&B">R&B</label>
          <input
            onChange={e => setGenre([...genre, e.target.name])}
            type="checkbox"
            name="Soul"
          />
          <label for="Soul">Soul</label>
          <input
            onChange={e => setGenre([...genre, e.target.name])}
            type="checkbox"
            name="Trap"
          />
          <label for="Trap">Trap</label>
          <input
            onChange={e => setGenre([...genre, e.target.name])}
            type="checkbox"
            name="Underground"
          />
          <label for="Underground">Underground</label>
          <input
            onChange={e => setGenre([...genre, e.target.name])}
            type="file"
            onChange={onFilesChange}
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button>Submit</button>
      </Modal.Footer>
    </Modal>
  );
}
export default connect(
  undefined,
  { addTrack }
)(UploadBeat);
