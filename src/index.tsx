import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import App from "./Components/app";
import { Provider } from "react-redux";
import store from "./Store/index.js";

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root"),
  () => console.log("rendered")
);
