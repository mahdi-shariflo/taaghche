import React from "react";
import Home from "./conponents/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/taaghche" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
