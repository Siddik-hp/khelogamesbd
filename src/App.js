import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader } from "./pages/Loader/Loader";

import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Features from "./pages/Features/Features";
import Home from "./pages/Home/Home";
import Privacy from "./pages/Privacy/Privacy";
import Video from "./pages/Video/Video";

const App = () => {
  const [loding, setLoading] = useState(true);
  window.onload = () => {
    setLoading(false);
  };
  return (
    <>
      {loding ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/video" element={<Video />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
