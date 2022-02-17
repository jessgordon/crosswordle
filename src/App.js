import React from "react";
import "./App.css";
import DiagonalMode from "./EasyMode";
import ThreeByThreeMode from "./NormalMode";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import EasyMode from "./EasyMode";
import NormalMode from "./NormalMode";

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
          <p>
            <Link to="/normal">Normal Mode</Link>
          </p>
          <hr className="solid mb-6"></hr>
        </div>
        <Routes>
          <Route path="/easy" element={<EasyMode />}></Route>
          <Route path="/normal" element={<NormalMode />}></Route>
          <Route path="*" element={<Navigate to="/easy" />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
