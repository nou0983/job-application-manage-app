import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import Wrapper from "./index.styles";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Wrapper>
          <App />
        </Wrapper>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
