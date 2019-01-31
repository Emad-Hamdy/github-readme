import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import { gitReducer, requestRepos, requestReadme } from "./redux/reducers";
import thunkMiddleware from "redux-thunk";

const logger = createLogger();
const rootReducer = combineReducers({
  gitReducer,
  requestRepos,
  requestReadme
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
