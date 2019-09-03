import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/reducers/authReducer";

function Sidebar(props) {
  return (
    <div id="sidebar">
      <div id="logo-div">
        <div id="logo">BtZ</div>
        <Link to="/">
          <h1>Beatz</h1>
        </Link>
        <Link to="/Dashboard">
          <button>Dashboard</button>
        </Link>
      </div>
      <div id="sidebar-search">
        <Link to="/Browse">
          <button>Browse All Beats</button>
        </Link>
        <h3>Search</h3>
        <input placeholder="search beatz" type="text" />
        <h3>Genres</h3>
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
      <div id="sidebar-user-info">
        <h3>User</h3>
        <a href="/">Account Info</a>
        {props.loggedIn && (
          <a href="/" onClick={props.logoutUser}>
            Logout
          </a>
        )}
      </div>
    </div>
  );
}

function mapStateToProps(reduxState) {
  return {
    loggedIn: reduxState.auth.loggedIn
  };
}

export default connect(
  mapStateToProps,
  { logoutUser }
)(Sidebar);
