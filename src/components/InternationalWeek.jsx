import React, { useState, useRef, useEffect } from "react";
import "../stylesheets/ProjetcPortfolio.css";
import "../stylesheets/GroupProject.css";
import InternationalWeekColorful from "../Images/InternationalWeekColorful.png";
import PointOfView from "../Images/PointOfView.png";
import Persona from "../Images/Persona.png";
import EmpathyMap from "../Images/EmpathyMap.png";
import BuildingPrototype from "../Images/BuildingPrototype.jpg";
import Brainstorming from "../Images/Brainstorming.png";

function InternationalWeek() {
  // Refs for section elements
  const empathise = useRef();
  const define = useRef();
  const ideate = useRef();
  const prototype = useRef();
  const conclusion = useRef();
  const toTop = useRef();

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
            Interational week in Eindhoven: Dutch Design Charette
          </h2>
          <img src={InternationalWeekColorful} className="image-portfolio" />
          <h3 className="contents-headline">CONTENTS OF THIS READ:</h3>
          <ul className="contents-of-the-page">
            <li
              className="contents-of-the-page-li"
              onClick={() => scrollHandler(empathise)}
            >
              1. Empathize: Identifying target audience and Empathizing with the
              user
            </li>
            <li
              className="contents-of-the-page-li"
              onClick={() => scrollHandler(define)}
            >
              2. Define: What is the problem and what are we trying to solve
            </li>
            <li
              className="contents-of-the-page-li"
              onClick={() => scrollHandler(ideate)}
            >
              3. Ideate: Coming up solutions, Brainstorming
            </li>
            <li
              className="contents-of-the-page-li"
              onClick={() => scrollHandler(prototype)}
            >
              4. Prototype
            </li>
            <li
              className="contents-of-the-page-li"
              onClick={() => scrollHandler(conclusion)}
            >
              Conclusion: How did the project change my perpective of view as a
              designer
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
        <div className="text-container" ref={empathise}>
          <h3 className="stage-title">
            1. Empathize: Identifying target audience and Empathizing with the
            user
          </h3>
          <h3 className="learning-outcomes">
            <span class="fire html-1">🔥</span> Learning outcome 1: User
            interaction (analysis & advice),
          </h3>
          <h3 className="learning-outcomes">
            <span class="fire html-1">🔥</span> Learning outcome 7:
            Goal-oriented interaction:
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
        <div className="text-container" ref={define}>
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

          <h3 className="learning-outcomes">
            <span class="fire html-1">🔥</span> Learning outcome 4:
            Future-oriented organisation:
          </h3>
          <p className="stage-explanation-text left-border">
            Wandering around working students/ teachers to find your team can be
            awkward and inconvenient.
          </p>
          <p className="stage-explanation-text">
            To clarify the problem statement, we utilized the Point of View
            template.
          </p>
          <img src={PointOfView} className="image-portfolio" />

          <h3 className="learning-outcomes">
            <span class="fire html-1">🔥</span> Learning outcome 5:
            Investigative problem solving:
          </h3>
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
        <div className="text-container" ref={ideate}>
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
        <div className="text-container" ref={prototype}>
          <h3 className="stage-title">4. Prototype</h3>
          <h3 className="learning-outcomes">
            <span class="fire html-1">🔥</span> Learning outcome 2: User
            interaction (execution & validation):
          </h3>
          <div className="text-container highlighted">
            <p className="stage-explanation-text">
              <strong>THE CONCEPT - </strong> The concept revolves around an
              empathetic building that utilizes AI to recognize your face and
              promptly match you with your class. Upon entering TQ, a screen
              greets you by name and guides you to your class area by indicating
              a designated color-coded path. These dynamic paths, labeled with
              colors, serve as a "smart floor" guiding you to the appropriate
              location within the building.
            </p>
          </div>
          <p className="stage-explanation-text">
            The unfinished aspect of the concept involves the building notifying
            you in advance about scheduled meetings and even playing pleasant
            music when you begin working on a solo project.
          </p>
          <p className="stage-explanation-text left-border">
            This idea aligns with the fourth Sustainable Development Goal:
            <strong> Quality Education</strong>.
          </p>
          <img src={BuildingPrototype} className="image-portfolio" />
        </div>
        {/* STAGE 5 */}
        <div className="text-container" ref={conclusion}>
          <h3 className="stage-title">
            {" "}
            Conclusion: How did the project change my perpective of view as a
            designer
          </h3>

          <h3 className="learning-outcomes">
            <span class="fire html-1">🔥</span> Learning outcome 7:
            Goal-oriented interaction:
          </h3>
          <p className="stage-explanation-text">
            {" "}
            Although it was a challenging project, I thoroughly enjoyed each day
            of it as it provided opportunities to learn about people and explore
            the world of design. This experience encouraged me to embrace more
            daring concepts and think "outside the box."
          </p>
          <p className="stage-explanation-text">
            Collaborating with building architects, graphic designers, and other
            media design students exposed me to their perspectives and working
            methods, enriching my own creative approach.
          </p>
          <p className="stage-explanation-text left-border">
            {" "}
            The most significant lesson I took away from this project is the
            importance of not conforming to traditional norms or blindly
            following design trends. Instead, I learned to create something
            unique, simple, and impactful that genuinely solves real-life
            problems for individuals.
          </p>
        </div>
      </div>
      {/* Scroll to Top Button */}
      <div
        className={`goToTopButton ${show ? "show" : ""}`}
        onClick={() => scrollToTop(toTop)}
      >
        {show && <h2> TO TOP</h2>}
      </div>
    </div>
  );
}

export default InternationalWeek;
