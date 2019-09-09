import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  getTracksByGenre,
  getAllTracks,
  getTopFiveTracks,
  resetGenre
} from "../../redux/reducers/trackReducer";
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
import allTracksLogo from "../../images/allTracksLogo.svg";
import "./Browse.scss";
import PurchaseBeat from "../PurchaseBeat/PurchaseBeat";
import { Pagination } from "react-bootstrap";

function Browse(props) {
  const [genre, setGenre] = useState("");
  const [genreString, setGenreString] = useState("");
  // const [tracks, setTracks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tracksPerPage] = useState(6);

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
  const genresStringsArray = [
    "Alternative",
    "Blues",
    "Freestyle",
    "Hip-Hop",
    "Old-School",
    "Pop",
    "RnB",
    "Soul",
    "Trap",
    "Underground"
  ];

  useEffect(() => {
    props.resetGenre();
    props.getAllTracks();
    props.getTopFiveTracks();
  }, []);

  const getTracksByGenre = async (genre, i) => {
    // setGenre(genre);
    setGenreString(genresStringsArray[i]);
    await props.getTracksByGenre(genresStringsArray[i]);
    setCurrentPage(1);
    // setTracks(props.tracksGenre);
  };

  const getAllTracks = () => {
    props.resetGenre();
    // setGenre("");
    setCurrentPage(1);
  };

  const handlePageSelect = e => {
    setCurrentPage(e.target.id);
  };

  const tracks = props.genre ? props.tracksGenre : props.tracks;
  const indexOfLastTrack = currentPage * tracksPerPage;
  const indexOfFirstTrack = indexOfLastTrack - tracksPerPage;
  const currentTracks = tracks.slice(indexOfFirstTrack, indexOfLastTrack);
  const pageNumbers = [];
  const genreIndex = genresStringsArray.findIndex(e => e == props.genre);
  for (let i = 1; i <= Math.ceil(tracks.length / tracksPerPage); i++) {
    pageNumbers.push(
      <Pagination.Item
        key={i}
        id={i}
        active={i == currentPage}
        onClick={handlePageSelect}
      >
        {i}
      </Pagination.Item>
    );
  }

  return (
    <div id="browse">
      <Sidebar />
      <div id="browse-beats">
        <div id="genre-cards">
          <h2>
            <img src={headphones} alt="" id="browse-icon" /> Browse by Genre
          </h2>
          {props.genre ? (
            <div
              key={genreIndex}
              style={{
                width: "50%",
                justifyContent: "space-between"
              }}
              onClick={getAllTracks}
              className="genre-card"
            >
              <img
                src={genresArray[genreIndex]}
                alt={genresStringsArray[genreIndex]}
              ></img>
              <h1>{genresStringsArray[genreIndex]} Tracks</h1>
              <button onClick={getAllTracks}>All Tracks</button>
            </div>
          ) : (
            genresArray.map((e, i) => {
              return (
                <div
                  key={i}
                  onClick={() => getTracksByGenre(e, i)}
                  className="genre-card"
                >
                  <img src={e} alt={e} className="responsive"></img>
                </div>
              );
            })
          )}
        </div>
        <div id="browse-top5">
          <h2>
            <img src={fire} alt="" className="fuego-icon" />
            This Week's Fuego Tracks
          </h2>
          {props.top5.map((e, i) => {
            return (
              <Track
                key={i}
                track_id={e.track_id}
                trackUrl={e.track_url}
                trackTitle={e.track_name}
                producerName={e.username}
                basePrice={e.base_price}
                exclusivePrice={e.exclusive_price}
                exclusive={e.exclusive}
              />
            );
          })}
        </div>
        <div id="browse-all-tracks">
          {props.genre ? (
            <h1>{genresStringsArray[genreIndex]} Tracks</h1>
          ) : (
            <h2>
              <img src={allTracksLogo} alt="" id="browse-icon" /> All Tracks
            </h2>
          )}
          {currentTracks.map((e, i) => {
            return (
              <Track
                key={i}
                track_id={e.track_id}
                producerName={e.username}
                trackUrl={e.track_url}
                trackTitle={e.track_name}
                basePrice={e.base_price}
                exclusivePrice={e.exclusive_price}
                exclusive={e.exclusive}
              />
            );
          })}
          <div id="pageNumbers">
            <Pagination>{pageNumbers}</Pagination>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

function mapStateToProps(reduxState) {
  return {
    top5: reduxState.track.top5,
    tracks: reduxState.track.tracks,
    tracksGenre: reduxState.track.tracksGenre,
    genre: reduxState.track.genre
  };
}

export default connect(
  mapStateToProps,
  { getTracksByGenre, getAllTracks, getTopFiveTracks, resetGenre }
)(Browse);
