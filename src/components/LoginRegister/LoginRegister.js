import React, { useState } from "react";
import axios from "axios";
import "./LoginRegister.scss";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  toggleLoginRegister,
  toggleLoginModal,
  loginUser,
  registerUser
} from "../../redux/reducers/authReducer";
import { Modal } from "react-bootstrap";

function LoginRegister(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleRegister = async () => {
    setError(false);
    if (!username || !email || !password || !confirmPassword) {
      setError(true);
    } else if (password !== confirmPassword) {
      setError(true);
    } else {
      let user = {
        username,
        email,
        password
      };
      await props.registerUser(user);
      if (props.redirect) {
        setRedirect(true);
      }
    }
  };

  const handleLogin = async () => {
    setError(false);
    if (!email || !password) {
      setError(true);
    } else {
      let user = {
        email,
        password
      };
      await props.loginUser(user);
      if (props.redirect) {
        setRedirect(true);
      }
    }
  };

  return (
    <>
      {redirect && <Redirect to="/Dashboard" />}
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        autoFocus
      >
        <Modal.Header closeButton id="closeButton">
          <Modal.Title id="contained-modal-title-vcenter">
            <div id="logo">BtZ</div>
            <h1>BEATZ</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.loginRegister === "register" && (
            <div id="register-form">
              <h4>Register</h4>
              <h3>Username</h3>
              <input
                id="registerUsername"
                value={username}
                onChange={e => setUsername(e.target.value)}
                type="text"
              />
              <h3>E-mail</h3>
              <input
                id="registerEmail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="text"
              />
              <h3>Password</h3>
              <input
                id="registerPassword1"
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
              />
              <h3>Confirm Password</h3>
              <input
                id="registerPassword2"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                type="password"
              />
              {error && (
                <p>
                  Please fill in all fields and make sure the passwords match.
                </p>
              )}
              {props.error && <p>{props.errorMessage}</p>}
              <p />
              <button id="registerButton" onClick={handleRegister}>
                Register
              </button>
            </div>
          )}
          {props.loginRegister === "login" && (
            <div id="login-form">
              <h3>Email</h3>
              <input
                id="loginUsername"
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="text"
              />
              <h3>Password</h3>
              <input
                id="loginPassword"
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
              />
              {error && <p>Please enter your email and password.</p>}
              {props.error && <p>{props.errorMessage}</p>}
              <p />
              <button id="loginButton" onClick={handleLogin}>
                Login
              </button>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          {props.loginRegister === "register" ? (
            <button
              id="switchToLogin"
              onClick={() => props.toggleLoginRegister("login")}
            >
              login
            </button>
          ) : (
            <button
              id="switchToRegister"
              onClick={() => props.toggleLoginRegister("register")}
            >
              Register
            </button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

function mapStateToProps(reduxState) {
  return {
    loginRegister: reduxState.auth.loginRegister,
    loggedIn: reduxState.auth.loggedIn,
    error: reduxState.auth.error,
    errorMessage: reduxState.auth.errorMessage
  };
}

export default connect(
  mapStateToProps,
  { toggleLoginModal, toggleLoginRegister, loginUser, registerUser }
)(LoginRegister);

{
  /* <div id="login-register">
      <div id="login-register-modal">

        {props.loginRegister === "register" && (
          <div id="register-modal">
            <div id="login-register-title">
              <div id="logo">BtZ</div>
              <h1>BEATZ</h1>
            </div>
            <div id="register-form">
              <h3>Username</h3>
              <input
                value={username}
                onChange={e => setUsername(e.target.value)}
                type="text"
              />
              <h3>E-mail</h3>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="text"
              />
              <h3>Password</h3>
              <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
              />
              <h3>Confirm Password</h3>
              <input
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                type="password"
              />
            </div>
            <button>Register</button>
            <button
              id="login-register-link"
              onClick={() => props.toggleLoginRegister("login")}
            >
              login
            </button>
          </div>
        )}
        {props.loginRegister === "login" && (
          <div id="login-modal">
            <div id="login-register-title">
              <div id="logo">BtZ</div>
              <h1>BEATZ</h1>
            </div>
            <div id="login-form">
              <h3>Username</h3>
              <input
                value={username}
                onChange={e => setUsername(e.target.value)}
                type="text"
              />
              <h3>Password</h3>
              <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
              />
            </div>
            <button>Login</button>
            <button
              id="login-register-link"
              onClick={() => props.toggleLoginRegister("register")}
            >
              register
            </button>
          </div>
        )}
      </div>
    </div> */
}
