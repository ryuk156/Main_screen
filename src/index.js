import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MainscreenProvider,MainscreenContext } from './MainscreenContext.js'

ReactDOM.render(
  <React.StrictMode>
     <MainscreenProvider>
    <App />
    </MainscreenProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
