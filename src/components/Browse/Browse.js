import React from "react";
import "./Browse.scss";
import Sidebar from "../Sidebar/Sidebar";
import Track from "../Track/Track";
import BeatCarousel from "../BeatCarousel/BeatCarousel";
import Footer from "../Footer/Footer";
import AlternativeCover from "../../images/AlternativeCover.png";
import BluesCover from "../../images/BluesCover.png";
import FreestyleCover from "../../images/FreestyleCover.png";
import HipHopCover from "../../images/HipHopCover.png";
import OldSchoolCover from "../../images/OldSchoolCover.png";
import PopCover from "../../images/PopCover.png";
import RnBCover from "../../images/RnBCover.png";
import SoulCover from "../../images/SoulCover.png";
import TrapCover from "../../images/TrapCover.png";
import UndergroundCover from "../../images/UndergroundCover.png";

function Browse(props) {
  const sampleTop5 = [
    {
      producerName: "someDude",
      trackTitle: "A Dope Beat",
      basePrice: "15.00",
      exclusivePrice: "100.00"
    },
    {
      producerName: "someDude",
      trackTitle: "A Dope Beat",
      basePrice: "15.00",
      exclusivePrice: "100.00"
    },
    {
      producerName: "someDude",
      trackTitle: "A Dope Beat",
      basePrice: "15.00",
      exclusivePrice: "100.00"
    },
    {
      producerName: "someDude",
      trackTitle: "A Dope Beat",
      basePrice: "15.00",
      exclusivePrice: "100.00"
    },
    {
      producerName: "someDude",
      trackTitle: "A Dope Beat",
      basePrice: "15.00",
      exclusivePrice: "100.00"
    }
  ];

  return (
    <div id="browse">
      <Sidebar />
      <div id="browse-beats">
        <div id="genre-cards">
          <h2>
            <span role="img" aria-label="headphones">
              🎧
            </span>{" "}
            Browse by Genre
          </h2>
          <div className="genre-card">
            <img src={AlternativeCover} alt="" className="albumCover"></img>
          </div>
          <div className="genre-card">
            <img src={BluesCover} alt="" />
          </div>
          <div className="genre-card">
            <img src={FreestyleCover} alt="" />
          </div>
          <div className="genre-card">
            <img src={HipHopCover} alt="" />
          </div>
          <div className="genre-card">
            <img src={OldSchoolCover} alt="" />
          </div>
          <div className="genre-card">
            <img src={PopCover} alt="" />
          </div>
          <div className="genre-card">
            <img src={RnBCover} alt="" />
          </div>
          <div className="genre-card">
            <img src={SoulCover} alt="" />
          </div>
          <div className="genre-card">
            <img src={TrapCover} alt="" />
          </div>
          <div className="genre-card">
            <img src={UndergroundCover} alt="" />
          </div>
        </div>
        <div id="browse-top5">
          <h2>
            <span role="img" aria-label="fire">
              🔥
            </span>{" "}
            This Week's Fuego Tracks
          </h2>
          {sampleTop5.map(e => {
            return (
              <Track
                key={i}
                producerName={"someDude"}
                trackTitle={"FireFlame"}
                basePrice={"15.00"}
                exclusivePrice={"100.00"}
              />
            );
          })}
        </div>
        <div id="browse-all-tracks"></div>
        <Footer />
      </div>
    </div>
  );
}

export default Browse;
