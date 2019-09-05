import React, { useState } from "react";
import { connect } from "react-redux";
import "./Browse.scss";
import Sidebar from "../Sidebar/Sidebar";
import Track from "../Track/Track";
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
import headphones from "../../images/headphones.png";
import fire from "../../images/fuego.png";
import "./Browse.scss";

function Browse(props) {
  const [genre, setGenre] = useState("");
  const genresArray = [
    AlternativeCover,
    BluesCover,
    FreestyleCover,
    HipHopCover,
    OldSchoolCover,
    PopCover,
    RnBCover,
    SoulCover,
    TrapCover,
    UndergroundCover
  ];

  return (
    <div id="browse">
      <Sidebar />
      <div id="browse-beats">
        <div id="genre-cards">
          <h2>
            <img src={headphones} alt="" id="browse-icon" /> Browse by Genre
          </h2>
          {genre
            ? genresArray
                .filter(e => e === genre)
                .map((e, i) => {
                  return (
                    <div
                      key={i}
                      style={{
                        position: "absolute",
                        top: "136px",
                        left: "218px"
                      }}
                      onClick={() => setGenre("")}
                      className="genre-card"
                    >
                      <img src={e} alt={e}></img>
                      <h1>{e}</h1>
                    </div>
                  );
                })
            : genresArray.map((e, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => setGenre(`${e}`)}
                    className="genre-card"
                  >
                    <img src={e} alt={e}></img>
                  </div>
                );
              })}
          {/* <div className="genre-card">
            <img src={AlternativeCover} alt=""></img>
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
          </div> */}
        </div>
        <div id="browse-top5">
          <h2>
            <img src={fire} alt="" id="fuego-icon" />
            This Week's Fuego Tracks
          </h2>
          {props.top5.map((e, i) => {
            return (
              <Track
                key={i}
                trackUrl={e.track_url}
                trackTitle={e.track_name}
                basePrice={e.base_price}
                exclusivePrice={e.exclusive_price}
                exclusive={e.exclusive}
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

function mapStateToProps(reduxState) {
  return {
    top5: reduxState.track.top5
  };
}

export default connect(mapStateToProps)(Browse);
