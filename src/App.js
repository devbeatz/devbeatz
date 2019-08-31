import React from "react";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import { connect } from "react-redux";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import { toggleLoginModal } from "./redux/reducers/authReducer";
import Browse from "./components/Browse/Browse";
import Dashboard from "./components/Dashboard/Dashboard";

function App(props) {
  return (
    <div className="App">
      <LoginRegister
        show={props.loginModal}
        onHide={() => props.toggleLoginModal("")}
      />
      {/* <Browse /> */}
      {/* <Homepage /> */}
      <Dashboard />
    </div>
  );
}

function mapStateToProps(reduxState) {
  return {
    loginModal: reduxState.auth.loginModal,
    loggedIn: reduxState.auth.loggedIn
  };
}

export default connect(
  mapStateToProps,
  { toggleLoginModal }
)(App);
