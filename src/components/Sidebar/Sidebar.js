import React from "react";
import LoginRegister from "../LoginRegister/LoginRegister";
import { Link } from "react-router-dom";
import btzLogo from "../../images/btzLogo.png";
import "./Sidebar.scss";
import { connect } from "react-redux";
import { logoutUser, toggleLoginModal } from "../../redux/reducers/authReducer";

function Sidebar(props) {
  console.log(props.loggedIn);
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
        <Link to="/Dashboard">
          <button id="dashboard-button">Dashboard</button>
        </Link>
        {props.loggedIn ? (
          <button onClick={props.logoutUser}>Logout</button>
        ) : (
          <button onClick={() => props.toggleLoginModal("login")}>Login</button>
        )}
      </div>
      <div id="sidebar-search">
        <Link to="/Browse">
          <button>Browse All Beats</button>
        </Link>
        <div className="sidebar-titles">
          <h3>Genres</h3>
        </div>
        <div id="genre-list">
          <a href="/">Alternative</a>
          <a href="/">Blues</a>
          <a href="/">Freestyle</a>
          <a href="/">Hip-Hop</a>
          <a href="/">Old School</a>
          <a href="/">Pop</a>
          <a href="/">R&B</a>
          <a href="/">Soul</a>
          <a href="/">Trap</a>
          <a href="/">Underground</a>
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
  { logoutUser, toggleLoginModal }
)(Sidebar);
