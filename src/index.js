import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { HomeContextProvider } from "./contexts/HomeContext";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <HomeContextProvider>
        <App />
      </HomeContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
