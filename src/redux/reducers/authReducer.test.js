import {
  GET_ALL_TRACKS,
  getAllTracks,
  RESET_GENRE,
  resetGenre,
  GET_TOP_5_TRACKS,
  getTopFiveTracks,
  GET_TRACKS_BY_GENRE,
  getTracksByGenre,
  GET_TRACKS_BY_USER,
  getTracksByUser,
  ADD_TRACK,
  addTrack,
  DELETE_TRACK,
  deleteTrack,
  UPDATE_TRACK,
  updateTrack
} from "./trackReducer";
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

describe("registerNewUser", () => {
  let userInput = "lilDucky";
  it("should bring in payload", () => {
    const text = "payload";
    const expectedAction = {
      type: types.REGISTER_USER,
      payload: axios.post("/auth/register", $`{userInput}`)
    };
    expectedAction(actions.registerNewUser(userInput)).toEqual(expectedAction);
  });
});
