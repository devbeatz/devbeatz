import axios from "axios";

const initialState = {
  tracks: [],
  tracksGenre: [],
  genre: "",
  top5: [],
  userBought: [],
  userUploaded: [],
  userSales: [],
  loading: false
};

export const GET_ALL_TRACKS = "GET_ALL_TRACKS";
export const RESET_GENRE = "RESET_GENRE";
export const GET_TOP_5_TRACKS = "GET_TOP_5_TRACKS";
export const GET_TRACKS_BY_GENRE = "GET_TRACKS_BY_GENRE";
export const GET_TRACKS_BY_USER = "GET_TRACKS_BY_USER";
export const ADD_TRACK = "ADD_TRACK";
export const DELETE_TRACK = "DELETE_TRACK";
export const UPDATE_TRACK = "UPDATE_TRACK";

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
      return [res.data, genre];
    })
  };
}

export function resetGenre() {
  return {
    type: RESET_GENRE
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

export function updateTrack(trackId, trackInfo) {
  return {
    type: UPDATE_TRACK,
    payload: axios.put(`/api/tracks/update/${trackId}`, trackInfo).then(res => {
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
        genre: "",
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
        tracksGenre: payload[0],
        genre: payload[1],
        loading: false
      };
    case `${GET_TRACKS_BY_GENRE}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case RESET_GENRE:
      return {
        ...state,
        genre: ""
      };
    case `${GET_TRACKS_BY_USER}_FULFILLED`:
      return {
        ...state,
        userBought: payload.User_Bought,
        userUploaded: payload.User_Tracks,
        userSales: payload.User_Sales,
        loading: false
      };
    case `${GET_TRACKS_BY_USER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${ADD_TRACK}_FULFILLED`:
      console.log(payload);
      return {
        ...state,
        userUploaded: payload,
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
        userUploaded: payload.User_Tracks,
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
        userUploaded: payload.User_Tracks,
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
