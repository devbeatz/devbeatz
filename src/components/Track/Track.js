import React from "react";
import "./Track.scss";
import ClippPlayer from "clipp-player";
import sampleImage from "../../images/dj-sound-mixer.jpg";

function Track(props) {
  return (
    <div id="track">
      <div id="track-info">
        <div id="track-producer">
          <img src={sampleImage} alt="producer" />
          <h3>{props.producerName}</h3>
        </div>
        <h2>{props.trackTitle}</h2>

        <h3>
          ${props.basePrice} / ${props.exclusivePrice}
        </h3>
      </div>
      <div id="track-player">
        <ClippPlayer
          className={"clipp-player"}
          src="https://beatzz.s3.amazonaws.com/bensound-allthat.mp3"
          btnStyle={{
            marginTop: "-18px",
            height: "50px",
            width: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "orange",
            background: "teal",
            borderRadius: "50%"
          }}
          counterStyle={{
            marginTop: "-17px",
            fontSize: "30px",
            color: "teal"
          }}
          volume={1}
          zoom={1}
          options={{
            audioRate: 1,
            autoCenter: true,
            barGap: 1,
            barHeight: 7,
            barWidth: 2,
            cursorColor: "teal",
            cursorWidth: 1,
            fillParent: true,
            height: 60,
            hideScrollbar: true,
            normalize: true,
            partialRender: true,
            progressColor: "orange",
            responsive: true,
            waveColor: "teal"
          }}
        />
      </div>
      <div id="track-buttons">
        {/* <button>Purchase</button>
        <button>Add to Faves</button> */}
      </div>
    </div>
  );
}

export default Track;
