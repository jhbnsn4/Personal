import "./App.css";
import Homepage from "./components/homepage/homepage";
import React from 'react';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="homepage" element={<Homepage />} />
        </Routes>
  );
}

export default App;
