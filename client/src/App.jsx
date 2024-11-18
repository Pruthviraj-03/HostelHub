import React from "react";
import { Routes, Route } from "react-router-dom";
import HostelList from "./pages/HostelList";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/location/:locationId" element={<HostelList />} />
    </Routes>
  );
};

export default App;
