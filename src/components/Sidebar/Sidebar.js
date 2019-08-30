import React from "react";
import "./Sidebar.scss";

function Sidebar(props) {
  return (
    <div id="sidebar">
      <div id="logo-div">
        <div id="logo">BtZ</div>
        <h1>Beatz</h1>
        <button>Dashboard</button>
      </div>
      <div id="sidebar-search">
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
        <a href="/">Logout</a>
      </div>
    </div>
  );
}

export default Sidebar;
