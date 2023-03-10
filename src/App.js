import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import ProjectPortfolio from "./components/ProjectPortfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/myportfolio" element={<ProjectPortfolio />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
