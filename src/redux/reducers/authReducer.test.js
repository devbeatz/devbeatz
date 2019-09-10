import {
  LOGIN_USER,
  loginUser,
  REGISTER_USER,
  registerUser,
  LOGOUT_USER,
  logoutUser,
  UPDATE_USER_INFO,
  updateUserInfo,
  TOGGLE_LOGIN_MODAL,
  toggleLoginModal,
  TOGGLE_LOGIN_REGISTER,
  toggleLoginRegister
} from "./authReducer";
import axios from "axios";
import * as actions from "./authReducer";
import * as types from "./authReducer";

describe("registerUser", () => {
  let userInput = "lilDucky";
  it("should bring in payload", () => {
    const expectedAction = {
      type: types.REGISTER_USER,
      payload: axios.post(`/auth/register, ${userInput}`)
    };
    expect(actions.registerUser(userInput)).toEqual(expectedAction);
  });
});

test("input with chucky", () => {
  expect(registerUser("chucky")).toEqual({
    type: REGISTER_USER,
    payload: axios.post(`auth/register`)
  });
});

describe("loginUser", () => {
  let userInput = "NoLuckJames";
  it("should bring in payload", () => {
    const expectedAction = {
      type: types.LOGIN_USER,
      payload: axios.post(`/auth/login, ${userInput}`)
    };
    expect(actions.loginUser(userInput)).toEqual(expectedAction);
  });
});

test("input with hammertime", () => {
  expect(loginUser("hammertime")).toEqual({
    type: LOGIN_USER,
    payload: axios.post(`auth/login`)
  });
});

describe("logoutUser", () => {
  it("should bring in payload", () => {
    let userInput = "NoLuckJames";
    const expectedAction = {
      type: types.LOGOUT_USER,
      payload: axios.get("/auth/logout")
    };
    expect(actions.logoutUser(userInput)).toEqual(expectedAction);
  });
});

test("input with ricoNasty", () => {
  expect(logoutUser("ricoNasty")).toEqual({
    type: LOGOUT_USER,
    payload: axios.get("/auth/logout")
  });
});
