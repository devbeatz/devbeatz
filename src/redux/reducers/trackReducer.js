import axios from "axios";

const initialState = {
  tracks: [],
  top5: [],
  loading: false
};

const GET_ALL_TRACKS = "GET_ALL_TRACKS";
const GET_TOP_5_TRACKS = "GET_TOP_5_TRACKS";
const GET_TRACKS_BY_GENRE = "GET_TRACKS_BY_GENRE";

export function getAllTracks() {
  return {
    type: GET_ALL_TRACKS
    // payload: axios.get().then(res => {
    //     return res.data
    // })
  };
}

export function getTop5Tracks() {
  return {
    type: GET_TOP_5_TRACKS
    // payload: axios.get().then(res => {
    //     return res.data
    // })
  };
}

export function getTracksByGenre(genre) {
  return {
    type: GET_TRACKS_BY_GENRE
    // payload: axios.get().then(res => {
    //     return res.data
    // })
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case `${GET_ALL_TRACKS}_FULFILLED`:
      return {
        ...state,
        tracks: payload,
        loading: false
      };
    case `${GET_ALL_TRACKS}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_TOP_5_TRACKS}_FULFILLED`:
      return {
        ...state,
        top5: payload,
        loading: false
      };
    case `${GET_TOP_5_TRACKS}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_TRACKS_BY_GENRE}_FULFILLED`:
      return {
        ...state,
        tracks: payload,
        loading: false
      };
    case `${GET_TRACKS_BY_GENRE}_PENDING`:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
