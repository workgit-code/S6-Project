import React, { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "react-reveal/Reveal";
import "font-awesome/css/font-awesome.min.css";
import GroupProjectImage from "../Images/GroupProjectImage.png";
import "../stylesheets/Projects.css";

function Projects() {
  return (
    <div className="main-div">
      {/* Project 1 */}
      <div className="container">
        <Link
          to="/myportfolio"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <div className="container-project">
            <div className="container-text">
              <Reveal effect="fadeInUp">
                <h1 className="project-title">My portfolio design</h1>
              </Reveal>
              <p className="project-description">
                An individual project of 4 weeks for building my portfolio
              </p>
              <div className="project-keywords">
                <ul>
                  <li>Researching</li>
                  <li> UI/ UX Design</li>
                  <li>React.js</li>
                </ul>
              </div>
            </div>
            <div className="container-image">
              <img src={GroupProjectImage} className="image-project" />
            </div>
          </div>
        </Link>

        {/* Project 2 */}
        <div className="container-project">
          <div className="container-image">
            <img src={GroupProjectImage} className="image-project" />
          </div>
          <div className="container-text">
            <h1>Making compliments</h1>
            <p className="project-description">Will be added in the future</p>
            <div className="read-case">
              {/* <ul className="project-keywords">
                <li>Researching</li>
                <li> UI/ UX Design</li>
                <li>Front-end developement</li>
              </ul> */}
            </div>
          </div>
        </div>

        {/* Project 3*/}
        <div className="container-project">
          <div className="container-text">
            <h1>International project</h1>
            <p className="project-description">Will be added in the future</p>
            <div className="read-case">
              {/* <ul className="project-keywords">
                <li>Researching</li>
                <li> UI/ UX Design</li>
                <li>Front-end developement</li>
              </ul> */}
            </div>
          </div>
          <div className="container-image">
            <img src={GroupProjectImage} className="image-project" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
