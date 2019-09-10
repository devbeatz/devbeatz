import axios from "axios";
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
import * as actions from "./trackReducer";
import * as types from "./trackReducer";

describe("getAllTracks", () => {
  it("should bring in payload", () => {
    const expectedAction = {
      type: types.GET_ALL_TRACKS,
      payload: axios.get("/api/tracks/getall")
    };
    expect(actions.getAllTracks()).toEqual(expectedAction);
  });
});

test("Should Hit GET Endpoint for getall tracks", () => {
  expect(getAllTracks()).toEqual({
    type: GET_ALL_TRACKS,
    payload: axios.get("/api/tracks/getall")
  });
});

test("should only have a type of 'RESET_GENRE' and no payload", () => {
  expect(resetGenre()).toEqual({
    type: RESET_GENRE
  });
});

test("should hit GET endpoint for tracks/topfive", () => {
  expect(getTopFiveTracks()).toEqual({
    type: GET_TOP_5_TRACKS,
    payload: axios.get("/api/tracks/getall")
  });
});

test("should hit getall tracks endpoint with query for specific genre", () => {
  expect(getTracksByGenre("espanol")).toEqual({
    type: GET_TRACKS_BY_GENRE,
    payload: axios.get(`/api/tracks/getall?genre=espanol`)
  });
});