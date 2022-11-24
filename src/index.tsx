import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import createSagaMiddleware from "redux-saga";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import rootSaga from "./sagas";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
