import React from "react";
import LoginRegister from "../LoginRegister/LoginRegister";
import { Link } from "react-router-dom";
import btzLogo from "../../images/btzLogo.png";
import "./Sidebar.scss";
import { connect } from "react-redux";
import {
  resetGenre,
  getTracksByGenre
} from "../../redux/reducers/trackReducer";
import { logoutUser, toggleLoginModal } from "../../redux/reducers/authReducer";

function Sidebar(props) {
  console.log(props.loggedIn);

  const handleGenreSelect = e => {
    props.getTracksByGenre(e.target.name);
  };

  return (
    <div id="sidebar">
      <LoginRegister
        show={props.loginModal}
        onHide={() => props.toggleLoginModal("")}
      />
      <div id="logo-div">
        <div id="logo">
          <img src={btzLogo} alt="" />
        </div>
        <Link to="/">
          <h1 id="beatzHomepage">Beatz</h1>
        </Link>
      </div>
      <div id="dashboard-buttons-div">
        {props.loggedIn ? (
          <>
            <Link to="/Dashboard">
              <button id="dashboard-button">Dashboard</button>
            </Link>
            <Link to="/">
              <button onClick={props.logoutUser} id="dashboard-button">
                Logout
              </button>
            </Link>
          </>
        ) : (
          <button
            onClick={() => props.toggleLoginModal("login")}
            id="dashboard-button"
          >
            Login
          </button>
        )}
      </div>
      <div id="sidebar-search">
        <Link to="/Browse">
          <button onClick={props.resetGenre} id="dashboard-browse-button">
            Browse All Beats
          </button>
        </Link>
        <div className="sidebar-titles">
          <h3>Genres</h3>
        </div>
        <div id="genre-list">
          <Link to="/Browse">
            <button
              className="link"
              name="Alternative"
              onClick={handleGenreSelect}
              id="Alternative-track-links"
            >
              Alternative
            </button>
          </Link>
          <Link to="/Browse">
            <button
              className="link"
              name="Blues"
              onClick={handleGenreSelect}
              id="Blues-track-links"
            >
              Blues
            </button>
          </Link>
          <Link to="/Browse">
            <button
              className="link"
              name="Freestyle"
              onClick={handleGenreSelect}
              id="Freestyle-track-links"
            >
              Freestyle
            </button>
          </Link>
          <Link to="/Browse">
            <button
              className="link"
              name="Hip-Hop"
              onClick={handleGenreSelect}
              id="HipHop-track-links"
            >
              Hip Hop
            </button>
          </Link>
          <Link to="/Browse">
            <button
              className="link"
              name="Old-School"
              onClick={handleGenreSelect}
              id="OldSchool-track-links"
            >
              Old School
            </button>
          </Link>
          <Link to="/Browse">
            <button
              className="link"
              name="Pop"
              onClick={handleGenreSelect}
              id="Pop-track-links"
            >
              Pop
            </button>
          </Link>
          <Link to="/Browse">
            <button className="link" name="RnB" onClick={handleGenreSelect}>
              R&B
            </button>
          </Link>
          <Link to="/Browse">
            <button className="link" name="Soul" onClick={handleGenreSelect}>
              Soul
            </button>
          </Link>
          <Link to="/Browse">
            <button className="link" name="Trap" onClick={handleGenreSelect}>
              Trap
            </button>
          </Link>
          <Link to="/Browse">
            <button
              className="link"
              name="Underground"
              onClick={handleGenreSelect}
            >
              Underground
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(reduxState) {
  return {
    loggedIn: reduxState.auth.loggedIn,
    loginModal: reduxState.auth.loginModal,
    loginRegister: reduxState.auth.loginRegister
  };
}

export default connect(
  mapStateToProps,
  { logoutUser, toggleLoginModal, resetGenre, getTracksByGenre }
)(Sidebar);
