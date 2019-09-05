import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import authReducer from "./reducers/authReducer";
import trackReducer from "./reducers/trackReducer";

const root = combineReducers({
  auth: authReducer,
  track: trackReducer
});

export default createStore(root, applyMiddleware(promise));
