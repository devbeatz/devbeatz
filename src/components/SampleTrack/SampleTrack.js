import React from "react";
import "./SampleTrack.scss";

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
