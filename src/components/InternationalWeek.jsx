import React from "react";
import "../stylesheets/ProjetcPortfolio.css";
import "../stylesheets/GroupProject.css";
import InternationalWeekColorful from "../Images/InternationalWeekColorful.png";
import DesignThinkingFiveSteps from "../Images/DesignThinkingFiveSteps.png";
import PointOfView from "../Images/PointOfView.png";
import Persona from "../Images/Persona.png";
import EmpathyMap from "../Images/EmpathyMap.png";
import BuildingPrototype from "../Images/BuildingPrototype.jpg";
import Brainstorming from "../Images/Brainstorming.png";

function InternationalWeek() {
  return (
    <div>
      <div className="container main-text">
        <div className="text-container">
          <h2 className="project-title">
            Interational week in Eindhoven: Dutch Design Charette
          </h2>
          <img src={InternationalWeekColorful} className="image-portfolio" />
          <h3 className="contents-headline">CONTENTS OF THIS READ:</h3>
          <ul className="contents-of-the-page">
            <li
              className="contents-of-the-page-li"
              onClick={() => scrollHandler(sprintOne)}
            >
              1. Empathize: Identifying target audience and Empathizing with the
              user
            </li>
            <li
              className="contents-of-the-page-li"
              onClick={() => scrollHandler(sprintTwo)}
            >
              2. Define: What is the problem and what are we trying to solve
            </li>
            <li
              className="contents-of-the-page-li"
              onClick={() => scrollHandler(sprintThree)}
            >
              3. Ideate: Coming up solutions, Brainstorming
            </li>
            <li
              className="contents-of-the-page-li"
              onClick={() => scrollHandler(sprintThree)}
            >
              4. Prototype
            </li>
          </ul>
        </div>
        <div className="text-container researchQuestion">
          <h3> Research question:</h3>
          <h1 className="research-question">
            How can we contribute to the SDG’s by designing a solution for the
            students within an Emathic building?
          </h1>
        </div>
        {/* STAEG 1 */}
        <div className="text-container">
          <h3 className="stage-title">
            1. Empathize: Identifying target audience and Empathizing with the
            user
          </h3>
          <p className="stage-explanation-text">
            We had an enjoyable and thrilling week working with a diverse group
            of 10 individuals from various parts of the world. Our project
            focused on <strong>"Empathic building"</strong> and we followed the
            5-step design thinking process throughout. Initially, we identified
            our target audience, considering the wide range of people who visit
            the TQ building: we decided to focus on <strong>students</strong>{" "}
            since we could relate to them the most.
          </p>

          <img src={Persona} className="image-portfolio" />
          <img src={EmpathyMap} className="image-portfolio" />
        </div>
        {/* STAGE 2 */}
        <div className="text-container">
          <h3 className="stage-title">
            2. Define: What is the problem and what are we trying to solve
          </h3>
          <p className="stage-explanation-text">
            One major inconvenience we personally encountered in the building
            environment is the high noise level due to the large number of
            people in open areas without walls or partitions. Another common
            issue we all faced, particularly at the beginning of the semester,
            is finding our designated class area or even the right table to sit
            at. This can be challenging since students from various courses are
            situated in the same open space.
          </p>
          <p className="stage-explanation-text left-border">
            Wandering around working students/ teachers to find your team can be
            awkward and inconvenient.
          </p>
          <p className="stage-explanation-text">
            To clarify the problem statement, we utilized the Point of View
            template.
          </p>
          <img src={PointOfView} className="image-portfolio" />
          <p className="stage-explanation-text">
            Some of the questions we asked ourselves were:
          </p>
          <p>
            {" "}
            <ul className="bulletpoints">
              <li className="list-item">
                How can we help our students to divide the space and make it
                more functional?
              </li>
              <li className="list-item">
                How can we help students who are lost to find their destination?
              </li>
              <li className="list-item">
                How we can create a quieter space on campus?
              </li>
              <li className="list-item">
                How can we better respect the privacy and needs of individuals?
              </li>
              <li className="list-item">
                What if the walls know people are lost?
              </li>
            </ul>
          </p>
        </div>
        {/* STAGE 3 */}
        <div className="text-container">
          <h3 className="stage-title">
            3. Ideate: Coming up solutions, Brainstorming
          </h3>
          <img src={Brainstorming} className="image-portfolio" />
          <p className="stage-explanation-text">
            Like any project, we had multiple concepts and ideas to address the
            defined problem. However, reaching the ideal solution that meets the
            criteria requires further iteration, testing, and validation, which
            is challenging to accomplish within a week. Nonetheless, jotting
            down all the imagined ideas on a blank space served as a valuable
            exercise to sharpen our problem-solving skills. In the end, we opted
            for the idea that was the most straightforward and personally
            appeared to be useful.
          </p>
        </div>
        {/* STAGE 4 */}
        <div className="text-container">
          <h3 className="stage-title">4. Prototype</h3>
          <img src={BuildingPrototype} className="image-portfolio" />
        </div>
        {/* STAGE 5 */}
        <div className="text-container">
          <h3 className="stage-title">
            {" "}
            Conclusion: How did the project change my perpective of view as a
            designer
          </h3>
          <p className="stage-explanation-text"> Helicopter view</p>
        </div>
      </div>
    </div>
  );
}

export default InternationalWeek;
