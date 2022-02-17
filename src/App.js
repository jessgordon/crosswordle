import React from "react";
import "./App.css";
import DiagonalMode from "./EasyMode";
import ThreeByThreeMode from "./NormalMode";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import EasyMode from "./EasyMode";
import NormalMode from "./NormalMode";
import HardMode from "./HardMode";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <header className="title is-1 mt-1">
            <h1>Crosswordle</h1>
          </header>
          <p>
            <Link to="/easy">Easy Difficulty</Link>
          </p>
          <p>
            <Link to="/normal">Normal Difficulty</Link>
          </p>
          <p>
            <Link to="/hard">Hard Difficulty</Link>
          </p>
          <hr className="solid mb-6"></hr>
        </div>
        <Routes>
          <Route path="/easy" element={<EasyMode />}></Route>
          <Route path="/normal" element={<NormalMode />}></Route>
          <Route path="/hard" element={<HardMode />}></Route>

          <Route path="*" element={<Navigate to="/easy" />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
