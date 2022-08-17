import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Searching from "./pages/Searching";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/searching" element={<Searching />} />
      </Routes>
    </Router>
  );
}

export default App;
