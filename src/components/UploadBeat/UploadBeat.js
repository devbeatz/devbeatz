import React, { useState } from "react";
import "../LoginRegister/LoginRegister.scss";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import Files from "react-files";
// import "../s3-keys";
import S3 from "aws-s3";

function UploadBeat(props) {
  const [trackName, setName] = useState("");
  const [basePrice, setBase] = useState("");
  const [exclusivePrice, setExclusive] = useState("");
  const [genre, setGenre] = useState("");

  const config = {
    bucketName: "beatzz",
    region: "US-EAST",
    accessKeyId: "AWSAccessKeyId=AKIAJUERCWEMWP27672Q",
    secretAccessKey: "AWSSecretKey=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",
    s3Url:
      "https://s3.console.aws.amazon.com/s3/buckets/beatzz/?region=us-east-2&tab=overview"
  };

  const S3Client = new S3(config);

  const newFileName = "my-awesome-file";

  const onFilesChange = files => {
    console.log(files[0].name);
    S3Client.uploadFile(files[0], files[0].name)
      .then(data => console.log(data))
      .catch(err => console.error(err));
  };

  const onFilesError = (error, Files) => {
    console.log("error code " + error.code + ": " + error.message);
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
            value={trackName}
            onChange={e => setName(e.target.value)}
            type="text"
          />
          <h3>Base Price</h3>
          <input
            value={basePrice}
            onChange={e => setBase(e.target.value)}
            type="number"
          />
          <h3>Exclusive Price</h3>
          <input
            value={exclusivePrice}
            onChange={e => setExclusive(e.target.value)}
            type="number"
          />

          <Files
            className="files-dropzone"
            onChange={onFilesChange}
            onError={onFilesError}
            accepts={["audio/*"]}
            multiple
            maxFiles={3}
            maxFileSize={10000000}
            minFileSize={0}
            clickable
          >
            Upload file
          </Files>

          <button>Upload</button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
export default UploadBeat;
