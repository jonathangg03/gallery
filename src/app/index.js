import React from "react";
import { render } from "react-dom";
import Main from "./pages/Main.jsx";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducer from "./reducers";

const store = createStore(reducer, {}, applyMiddleware(reduxThunk));

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("app")
);
