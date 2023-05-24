import React, { useState } from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import PortfolioHighFiFigma from "../Images/PortfolioHighFiFigma.png";
import GroupProjectImage from "../Images/GroupProjectImage.png";
import InternationaWeek from "../Images/InternationaWeek.png";
import "../stylesheets/Projects.css";

function Projects() {
  return (
    <div className="main-container">
      {/* FIRST PROJECT */}
      <Link
        to="/myportfolio"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <div className="project-container">
          <div className="overview-text-content">
            <h1>My portfolio design</h1>
            <p className="project-description">
              An individual project of 4 weeks for building my portfolio
            </p>
          </div>
          <div className="overview-image-content">
            <img src={PortfolioHighFiFigma} className="image-project" />
          </div>
        </div>
      </Link>

      {/* SECOND PROJECT */}
      <Link
        to="/groupproject"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <div className="project-container">
          <div className="overview-text-content">
            <h1>Group Project: Onboarding</h1>
            <p className="project-description">
              How to attract & retain international employees at Simac?
            </p>
            &#128073;
          </div>
          <div className="overview-image-content">
            <img src={GroupProjectImage} className="image-project" />
          </div>
        </div>
      </Link>

      {/* THIRD PROJECT */}
      <Link
        to="/myportfolio"
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <div className="project-container">
          <div className="overview-text-content">
            <h1>Dutch design charrette</h1>
            <p className="project-description"></p>
          </div>
          <div className="overview-image-content">
            <img src={InternationaWeek} className="image-project" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Projects;
