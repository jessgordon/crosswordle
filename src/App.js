import React, { useState, useEffect } from "react";
import { WORDS } from "./data/data";
import "./App.css";
import EasyMode from "./EasyMode";
import HowToPlay from "./components/HowToPlay";
import Grid from "./components/Grid";
import Score from "./components/Score";
import LetterBucket from "./components/LetterBucket";
import DiagonalMode from "./components/DiagonalMode";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <header className="title is-1 mt-1">
            <h1>Crosswordle</h1>
          </header>
          <p>
            <Link to="/easy">Easy Mode</Link>
          </p>
          <hr className="solid mb-6"></hr>
        </div>
        <Routes>
          <Route path="/easy" element={<DiagonalMode />}></Route>
          <Route path="*" element={<Navigate to="/easy" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
