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

test('Get user tracks', () => {
  expect(getTracksByUser()).toEqual({
    type: GET_TRACKS_BY_USER,
    payload: axios.get("/api/tracks/getuser")
  })
})

test('Adding track', () => {
  expect(addTrack({track_name: 'unit test', })).toEqual({
    type: ADD_TRACK,
    payload: axios.post("/api/tracks/create", {track_name: 'unit test'})
  })
})

test('Deleting track', () => {
  expect(deleteTrack(113)).toEqual({
    type: DELETE_TRACK,
    payload: axios.delete(`/api/tracks/delete/113`)
  })
})

test('Updating track', () => {
  expect(updateTrack(113, {track_name: 'updatedTrackName'})).toEqual({
    type: UPDATE_TRACK,
    payload: axios.put(`/api/tracks/update/${113}`, {track_name: 'updatedTrackName'})
  })
})

test("Input with banana", () => {
test("Should Hit GET Endpoint for getall tracks", () => {
  expect(getAllTracks()).toEqual({
    type: GET_ALL_TRACKS,
    payload: axios.get("/api/tracks/getall")
  });
})});

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
