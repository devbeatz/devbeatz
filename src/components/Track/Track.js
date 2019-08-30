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
          src="https://beatzz.s3.amazonaws.com/bensound-summer.mp3"
          btnStyle={{
            color: "orange",
            background: "teal",
            borderRadius: "30px"
          }}
          counterStyle={{
            color: "teal"
          }}
          volume={1}
          zoom={1}
          options={{
            audioRate: 1,
            autoCenter: true,
            barGap: 1,
            cursorColor: "blue",
            cursorWidth: 1,
            fillParent: true,
            height: 100,
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
        <button>Purchase</button>
        <button>Add to Faves</button>
      </div>
    </div>
  );
}

export default Track;
