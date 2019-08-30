import React, { useState } from "react";
import "./LoginRegister.scss";
import { connect } from "react-redux";
import {
  toggleLoginRegister,
  toggleLoginModal
} from "../../redux/reducers/authReducer";
import { Modal } from "react-bootstrap";

function LoginRegister(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      autofocus
    >
      <Modal.Header closeButton>
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
            <button>Register</button>
          </div>
        )}
        {props.loginRegister === "login" && (
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
            <button>Login</button>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        {props.loginRegister === "register" ? (
          <button onClick={() => props.toggleLoginRegister("login")}>
            login
          </button>
        ) : (
          <button onClick={() => props.toggleLoginRegister("register")}>
            Register
          </button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

function mapStateToProps(reduxState) {
  return {
    loginRegister: reduxState.auth.loginRegister
  };
}

export default connect(
  mapStateToProps,
  { toggleLoginModal, toggleLoginRegister }
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
