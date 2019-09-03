import React from "react";
import "./Track.scss";
import ClippPlayer from "clipp-player";
import sampleImage from "../../images/dj-sound-mixer.jpg";
import favoriteHeart from "../../images/favoriteHeart.png";
import dollar from "../../images/USdollar.png";

function Track(props) {
  return (
    <div id="track">
      <div id="track-player-div">
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
              color: "white",
              background: "hotpink",
              borderRadius: "50%"
            }}
            counterStyle={{
              marginTop: "-17px",
              fontSize: "30px",
              color: "hotpink"
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
              progressColor: "hotpink",
              responsive: true,
              waveColor: "white"
            }}
          />
        </div>
      </div>
      <div id="track-buttons">
        <button>
          <img src={dollar} alt="" className="icons" />
        </button>
        <button>
          <img src={favoriteHeart} alt="" className="icons" />
        </button>
      </div>
    </div>
  );
}

export default Track;
