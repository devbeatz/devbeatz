import axios from "axios";

const initialState = {
  tracks: [],
  tracksGenre: [],
  top5: [],
  userBought: [],
  userUploaded: [],
  loading: false
};

const GET_ALL_TRACKS = "GET_ALL_TRACKS";
const GET_TOP_5_TRACKS = "GET_TOP_5_TRACKS";
const GET_TRACKS_BY_GENRE = "GET_TRACKS_BY_GENRE";
const GET_TRACKS_BY_USER = "GET_TRACKS_BY_USER";
const ADD_TRACK = "ADD_TRACK";
const DELETE_TRACK = "DELETE_TRACK";
const UPDATE_TRACK = "UPDATE_TRACK";

export function getAllTracks() {
  return {
    type: GET_ALL_TRACKS,
    payload: axios.get("/api/tracks/getall").then(res => {
      return res.data;
    })
  };
}

export function getTopFiveTracks() {
  return {
    type: GET_TOP_5_TRACKS,
    payload: axios.get("/api/tracks/topfive").then(res => {
      return res.data;
    })
  };
}

export function getTracksByGenre(genre) {
  return {
    type: GET_TRACKS_BY_GENRE,
    payload: axios.get(`/api/tracks/getall?genre=${genre}`).then(res => {
      return res.data;
    })
  };
}

export function getTracksByUser() {
  return {
    type: GET_TRACKS_BY_USER,
    payload: axios.get("/api/tracks/getuser").then(res => {
      return res.data;
    })
  };
}

export function addTrack(trackInfo) {
  return {
    type: ADD_TRACK,
    payload: axios.post("/api/tracks/create", trackInfo).then(res => {
      return res.data;
    })
  };
}

export function deleteTrack(trackId) {
  return {
    type: DELETE_TRACK,
    payload: axios.delete(`/api/tracks/delete/${trackId}`).then(res => {
      return res.data;
    })
  };
}

export function updateTrack(trackId) {
  return {
    type: UPDATE_TRACK,
    payload: axios.put(`/api/tracks/update/${trackId}`).then(res => {
      return res.data;
    })
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
        tracksGenre: payload,
        loading: false
      };
    case `${GET_TRACKS_BY_GENRE}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_TRACKS_BY_USER}_FULFILLED`:
      return {
        ...state,
        userTracks: payload,
        loading: false
      };
    case `${GET_TRACKS_BY_USER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${ADD_TRACK}_FULFILLED`:
      return {
        ...state,
        userTracks: payload,
        loading: false
      };
    case `${ADD_TRACK}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${UPDATE_TRACK}_FULFILLED`:
      return {
        ...state,
        userTracks: payload,
        loading: false
      };
    case `${UPDATE_TRACK}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${DELETE_TRACK}_FULFILLED`:
      return {
        ...state,
        userTracks: payload,
        loading: false
      };
    case `${DELETE_TRACK}_PENDING`:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
