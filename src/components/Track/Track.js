import React, { useState } from "react";
import "./Track.scss";
import ClippPlayer from "clipp-player";
import sampleImage from "../../images/dj-sound-mixer.jpg";
import download from "../../images/downloadButton.png";
import dollar from "../../images/USdollar.png";
import PuchaseBeat from '../PurchaseBeat/PurchaseBeat';
import PurchaseBeat from "../PurchaseBeat/PurchaseBeat";

function Track(props) {
  const [ purchase, setPurchase ] = useState(false);
  return (
    <div id="track">
      < PurchaseBeat show={purchase} onHide={() => setPurchase(false)}
      base_price={props.basePrice}
      exclusive_price={props.exclusivePrice}
      track_name={props.trackTitle}
      track_id={props.track_id}
      />
      <div id="track-player-div">
        <div id="track-info">
          <div id="track-producer">
            <h3>{props.producerName}</h3>
          </div>
          <h2>{props.trackTitle}</h2>

          <h3>
            {props.basePrice} / {props.exclusivePrice}
          </h3>
        </div>
        <div id="track-player">
          <ClippPlayer
            className={"clipp-player"}
            src={props.trackUrl}
            btnStyle={{
              marginTop: "-18px",
              height: "50px",
              width: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              background: "transparent",
              borderRadius: "50%"
            }}
            counterStyle={{
              marginTop: "-17px",
              fontSize: "30px",
              color: "white"
            }}
            volume={1}
            zoom={1}
            options={{
              audioRate: 1,
              autoCenter: true,
              barGap: 1,
              barHeight: 7,
              barWidth: 2,
              cursorColor: "white",
              cursorWidth: 1,
              fillParent: true,
              height: 60,
              hideScrollbar: true,
              normalize: true,
              partialRender: true,
              progressColor: "deepskyblue",
              responsive: true,
              waveColor: "white"
            }}
          />
        </div>
      </div>
      <div id="track-buttons">
        {props.purchased ? (
          <a href={props.trackUrl} download>
            <img src={download} alt="" className="download-icon" />
          </a>
        ) : (
          <button id="dollar-button" onClick={() => setPurchase(true)} >
            <img src={dollar} alt="" className="download-icon" />
          </button>
        )}
        {/* <button>
          <img src={favoriteHeart} alt="" className="icons" />
        </button> */}
      </div>
    </div>
  );
}

export default Track;
