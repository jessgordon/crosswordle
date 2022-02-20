import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import EasyMode from "./EasyMode";
import NormalMode from "./NormalMode";
import HardMode from "./HardMode";
import icon from "./Images/icon.png";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <header className="title is-1 mt-1 is-spaced">
            <h1 className="is-size-1-mobile"	>
              <img id="icon" src={icon} alt="Icon" width="70" height="70" />{" "}
              Crosswordle
            </h1>
          </header>
        </div>
        <div className="columns mode-links">
          <div className="column">
            <Link
              className="mode-link button is-success is-light is-size-5 is-outlined"
              to="/easy"
            >
              Easy Difficulty
            </Link>
          </div>
          <div className="column">
            <Link
              className="mode-link button is-warning is-light is-size-5 is-outlined"
              to="/normal"
            >
              Normal Difficulty
            </Link>
          </div>
          <div className="column">
            <Link
              className="mode-link button is-danger is-light is-size-5 is-outlined"
              to="/hard"
            >
              Hard Difficulty
            </Link>
          </div>
        </div>
        <hr className="solid mb-6"></hr>
        <Routes>
          <Route path="/easy" element={<EasyMode />}></Route>
          <Route path="/normal" element={<NormalMode />}></Route>
          <Route path="/hard" element={<HardMode />}></Route>

          <Route path="*" element={<Navigate to="/normal" />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
