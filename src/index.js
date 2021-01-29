import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";

import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
