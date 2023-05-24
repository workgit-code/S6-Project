import React, { useState, useEffect, useRef } from "react";
import "font-awesome/css/font-awesome.min.css";
import "../stylesheets/GroupProject.css";
import "../stylesheets/ProjetcPortfolio.css";
import SimacCompanyVisit from "../Images/SimacCompanyVisit.jpg";
import AffinityMap from "../Images/AffinityMap.png";
import CompetitiveAnalysis from "../Images/CompetitiveAnalysis.png";
import ConceptBrainstorming from "../Images/ConceptBrainstorming.png";

function GroupProject() {
  // Refs for section elements
  const sprintOne = useRef();
  const sprintTwo = useRef();
  const sprintThree = useRef();
  // const sprintFour = useRef();
  // const sprintFive = useRef();
  // const conclusions = useRef();

  // Scroll to a specific section
  const scrollHandler = (elmRef) => {
    console.log(elmRef.current);
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  };

  // Scroll to the top of the page
  const scrollToTop = (elmRef) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // State for showing the "Scroll to Top" button
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="container main-text">
        <div className="text-container">
          <h2 className="project-title">
            Creating a better Onboarding experience for the International
            employees at Simac
          </h2>
          <img src={SimacCompanyVisit} className="image-portfolio" />
          <h3 className="contents-headline">CONTENTS OF THIS READ</h3>
          <ul className="contents-of-the-page">
            <li
              className="contents-of-the-page-li"
              onClick={() => scrollHandler(sprintOne)}
            >
              Sprint 1 - Explore onboarding process by understanding and
              defining user requirements
            </li>
            <li
              className="contents-of-the-page-li"
              onClick={() => scrollHandler(sprintTwo)}
            >
              Sprint 2 - Converging the data we have and defining user
              requirments by highlight prelimenary research
            </li>
            <li
              className="contents-of-the-page-li"
              onClick={() => scrollHandler(sprintThree)}
            >
              Sprint 3 - Concepting + Design
            </li>
            {/* <li
              className="contents-of-the-page-li"
              onClick={() => scrollHandler(sprintFour)}
            >
              Sprint 4 - still to be added
            </li>
            <li
              className="contents-of-the-page-li"
              onClick={() => scrollHandler(sprintFive)}
            >
              Sprint 5 - still to be added
            </li>
            <li
              className="contents-of-the-page-li"
              onClick={() => scrollHandler(conclusions)}
            >
              Conclusion & Reflection - still to be added
            </li> */}
          </ul>
        </div>
        {/* STAGE 1 */}
        <div className="text-container" ref={sprintOne}>
          <h3 className="stage-title">
            Sprint 1 - Explore onboarding process by understanding and defining
            user requirements
          </h3>
          <p className="stage-explanation-text">
            As a group, we prioritized the equitable distribution of work on the
            project, ensuring that each team member had their fair share of
            responsibilities. In this discussion, I will primarily focus on
            highlighting my individual contributions.
          </p>
          <p className="stage-explanation-text">
            During the initial Sprint of the project, I collaborated with a team
            member to conduct comprehensive Competitor research. This research
            proved to be highly insightful as it enabled us to explore and
            analyze the offerings provided by other prominent IT giants within
            the company, specifically targeting the needs and requirements of
            newly hired foreign employees.
          </p>
          <p className="stage-explanation-text">
            The other research methods I used are described as:
          </p>
          <p>
            <ul className="bulletpoints">
              <li className="list-item">Brainstorming</li>
              <li className="list-item">Competitive anlysis</li>
              <li className="list-item">Interviews</li>
            </ul>
          </p>
          <img src={CompetitiveAnalysis} className="image-portfolio" />
        </div>
        {/* STAGE 2 */}
        <div className="text-container" ref={sprintTwo}>
          <h3 className="stage-title">
            Sprint 2 - Converging the data we have and defining user requirments
            by highlight prelimenary research
          </h3>
          <p className="stage-explanation-text">
            The other research methos I used are described as:
          </p>

          <ul className="bulletpoints">
            <li className="list-item">Interviews analysis</li>
            <li className="list-item">Affinity mapping</li>
            <li className="list-item">User Requirements</li>
            <li className="list-item">Infographics</li>
          </ul>

          <img src={AffinityMap} className="image-portfolio" />
        </div>
        {/* STAGE 3 */}
        <div className="text-container" ref={sprintThree}>
          <h3 className="stage-title">
            Sprint 3 - Concepting + Design. Iterative design with lots of
            brainstorming
          </h3>
          <p className="stage-explanation-text"></p>
          <img src={ConceptBrainstorming} className="image-portfolio" />
        </div>
        {/* STAGE 4 */}
        {/* STAGE 5 */}
      </div>
    </div>
  );
}

export default GroupProject;
