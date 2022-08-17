import React from "react";
import "./App.css";
import { Watch } from "./components/Watch";
import { Routes, Route } from "react-router-dom";
import { Semicircle } from "./components/Semicircle";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Watch />} />
        <Route path="/semicircle" element={<Semicircle />} />
      </Routes>
    </div>
  );
}

export default App;
