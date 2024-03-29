import React from "react";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Sidebar from "./components/Sidebar/Sidebar";
import "./styles/global.scss";
import { HashRouter } from "react-router-dom";
import { connect } from "react-redux";
import routes from "./components/routes";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import UploadBeat from "./components/UploadBeat/UploadBeat";
import { toggleLoginModal } from "./redux/reducers/authReducer";
import PurchaseBeat from './components/PurchaseBeat/PurchaseBeat';

function App(props) {
  return (
    <HashRouter>
      <div className="App">
        {/* <LoginRegister
          show={props.loginModal}
          onHide={() => props.toggleLoginModal("")}
        /> */}
        {/* <UploadBeat show={true} /> */}
        {routes}
      </div>
    </HashRouter>
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
