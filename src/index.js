import "aos/dist/aos.css"; // You can also use <link> for styles
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
require("./scss/main.css");
// ..
AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
