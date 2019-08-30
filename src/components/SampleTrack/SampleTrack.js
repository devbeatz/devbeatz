import React from "react";
import "./SampleTrack.scss";
import sampleImage from "../../images/dj-sound-mixer.jpg";

function SampleTrack(props) {
  return (
    <div
      id="sample-track"
      style={{
        backgroundImage: `url(${props.coverImage})`
      }}
    >
      <p>play</p>
    </div>
  );
}

export default SampleTrack;
