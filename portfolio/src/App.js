import "./App.css";
import Homepage from "./components/homepage/homepage";
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/nav";
import Login from './components/login/login'
import Code from './components/code/code'

function App() {
  const [pinnedApp, setPinnedApp] = useState(false);
  const setPinnedValue = () => {
    setPinnedApp(!pinnedApp);
    console.log("hi");
  }
  return (
    <div className={pinnedApp ? "main-container-pinned" : "main-container"}>
      <Nav setPinnedApp={setPinnedValue}/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="homepage" element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="code" element={<Code />} />
        </Routes>
        </div>
  );
}

export default App;
