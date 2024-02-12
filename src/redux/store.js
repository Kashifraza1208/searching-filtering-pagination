import { createStore, combineReducers, applyMiddleware } from "redux";

import { thunk } from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { addDataReducer } from "./addDataReducer";

const reducer = combineReducers({
  dataArray: addDataReducer,
});

const middleware = [thunk];
const initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
