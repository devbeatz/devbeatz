import axios from "axios";

const initialState = {
  username: "",
  email: "",
  profilePic: "",
  loggedIn: false,
  loading: false,
  loginModal: false,
  loginRegister: "register",
  error: false,
  errorMessage: ""
};

const LOGIN_USER = "LOGIN_USER";
const REGISTER_USER = "REGISTER_USER";
const LOGOUT_USER = "LOGOUT_USER";
const UPDATE_USER_INFO = "UPDATE_USER_INFO";
const TOGGLE_LOGIN_MODAL = "TOGGLE_LOGIN_MODAL";
const TOGGLE_LOGIN_REGISTER = "TOGGLE_LOGIN_REGISTER";

export function loginUser(user) {
  return {
    type: LOGIN_USER,
    payload: axios.post("/auth/login", user).then(res => {
      return res.data;
    })
  };
}

export function registerUser(user) {
  return {
    type: REGISTER_USER,
    payload: axios.post("/auth/register", user).then(res => {
      return res.data;
    })
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
    payload: axios.get("/auth/logout")
  };
}

export function updateUserInfo(userInfo) {
  return {
    type: UPDATE_USER_INFO
    // payload: axios.put().then(res => {
    //     return res.data
    // })
  };
}

export function toggleLoginModal(loginOrRegister) {
  return {
    type: TOGGLE_LOGIN_MODAL,
    //loginRegister should be either 'login' or 'register'
    payload: loginOrRegister
  };
}

export function toggleLoginRegister(loginOrRegister) {
  return {
    type: TOGGLE_LOGIN_REGISTER,
    payload: loginOrRegister
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case `${LOGIN_USER}_FULFILLED`:
      console.log(payload);
      return {
        ...state,
        username: payload.username,
        email: payload.email,
        profilePic: payload.profilePic,
        loggedIn: true,
        loading: false,
        error: false,
        errorMessage: "",
        loginModal: false
      };
    case `${LOGIN_USER}_PENDING`:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: ""
      };
    case `${LOGIN_USER}_REJECTED`:
      console.log(payload);
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: "Username or password is incorrect"
      };
    case `${REGISTER_USER}_FULFILLED`:
      console.log("register fulfilled");
      return {
        ...state,
        username: payload.username,
        email: payload.email,
        loading: false,
        error: false,
        loginModal: false
      };
    case `${REGISTER_USER}_PENDING`:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: ""
      };
    case `${REGISTER_USER}_REJECTED`:
      console.log("register rejected");
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: "Username taken"
      };
    case `${LOGOUT_USER}_FULFILLED`:
      return initialState;
    case `${LOGOUT_USER}_PENDING`:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: ""
      };
    case `${UPDATE_USER_INFO}_FULFILLED`:
      return {
        ...state,
        username: payload.username,
        email: payload.email,
        profilePic: payload.profilePic,
        loading: false
      };
    case `${UPDATE_USER_INFO}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case TOGGLE_LOGIN_MODAL:
      return {
        ...state,
        loginModal: !state.loginModal,
        loginRegister: payload
      };
    case TOGGLE_LOGIN_REGISTER:
      return {
        ...state,
        loginRegister: payload
      };
    default:
      return state;
  }
}
