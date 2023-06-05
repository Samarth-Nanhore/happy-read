import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { HomeContextProvider } from "./contexts/HomeContext";
import { LoginContextProvider } from "./contexts/LoginContext";
import { CartContextProvider } from "./contexts/CartContext";
import { WishlistContextProvider } from "./contexts/WishlistContext";
import { SignupContextProvider } from "./contexts/SignupContext";
import { FilterContextProvider } from "./contexts/FilterContext";
import { WelcomeContextProvider } from "./contexts/WelcomeContext";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <HomeContextProvider>
        <LoginContextProvider>
          <CartContextProvider>
            <WishlistContextProvider>
              <SignupContextProvider>
                <FilterContextProvider>
                  <WelcomeContextProvider>
                    <App />
                  </WelcomeContextProvider>
                </FilterContextProvider>
              </SignupContextProvider>
            </WishlistContextProvider>
          </CartContextProvider>
        </LoginContextProvider>
      </HomeContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
