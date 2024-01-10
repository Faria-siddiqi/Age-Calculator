import React from "react";
import "./App.css";
import Generator from "./Component/Generator";
import AgeCalculator from "./Component/AgeCalculator";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Generator />} />
        <Route path="/result/:age" element={<AgeCalculator/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
