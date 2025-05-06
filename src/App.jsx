import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Overview,
  Genre,
  Trial,
  Popularity,
  BxR,
  BvR,
  Distruption,
} from "./components";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/genre" element={<Genre />} />
            <Route path="/trial" element={<Trial />} />
            <Route path="/popularity" element={<Popularity />} />
            <Route path="/bxr" element={<BxR />} />
            <Route path="/bvr" element={<BvR />} />
            <Route path="/distruption" element={<Distruption />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
