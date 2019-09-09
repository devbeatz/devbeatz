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
          <h1>Beatz</h1>
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
          <button onClick={props.resetGenre}>Browse All Beats</button>
        </Link>
        <div className="sidebar-titles">
          <h3>Genres</h3>
        </div>
        <div id="genre-list">
          <Link to="/Browse">
            <button name="Alternative" onClick={handleGenreSelect}>
              Alternative
            </button>
          </Link>
          <Link to="/Browse">
            <button name="Blues" onClick={handleGenreSelect}>
              Blues
            </button>
          </Link>
          <Link to="/Browse">
            <button name="Freestyle" onClick={handleGenreSelect}>
              Freestyle
            </button>
          </Link>
          <Link to="/Browse">
            <button name="HipHop" onClick={handleGenreSelect}>
              Hip-Hop
            </button>
          </Link>
          <Link to="/Browse">
            <button name="OldSchool" onClick={handleGenreSelect}>
              Old School
            </button>
          </Link>
          <Link to="/Browse">
            <button name="Pop" onClick={handleGenreSelect}>
              Pop
            </button>
          </Link>
          <Link to="/Browse">
            <button name="RnB" onClick={handleGenreSelect}>
              R&B
            </button>
          </Link>
          <Link to="/Browse">
            <button name="Soul" onClick={handleGenreSelect}>
              Soul
            </button>
          </Link>
          <Link to="/Browse">
            <button name="Trap" onClick={handleGenreSelect}>
              Trap
            </button>
          </Link>
          <Link to="/Browse">
            <button name="Underground" onClick={handleGenreSelect}>
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
