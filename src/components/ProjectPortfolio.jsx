import React, { useState, useRef, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import "../stylesheets/ProjetcPortfolio.css";
import "../stylesheets/GroupProject.css";
import PortfolioHighFi from "../Images/PortfolioHighFi.png";
import PortfolioMockup from "../Images/PortfolioMockup.png";
import PortfolioSketches from "../Images/PortfolioSketches.jpg";
import CodeSnippetPortfolio from "../Images/CodeSnippetPortfolio.png";

function ProjectPortfolio() {
  // Refs for section elements
  const stageInsights = useRef();
  const stageIdentify = useRef();
  const stageSketches = useRef();
  const stagePrototype = useRef();
  const stageCoding = useRef();
  const stageConclusion = useRef();
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

  // Animations:

  return (
    <div>
      <div className="container main-text">
        <div className="text-container">
          <h2 className="project-title">
            Individual project: Crafting my portfolio
          </h2>
          <img src={PortfolioMockup} className="image-portfolio" />
          <h3 className="contents-headline">CONTENTS OF THIS READ</h3>
          <ul className="contents-of-the-page">
            <li
              className="contents-of-the-page-li"
              onClick={() => scrollHandler(stageInsights)}
            >
              1. Gathering Gathering fundamental stageInsights (through CMD
              methods)
            </li>
            <li
              className="contents-of-the-page-li"
              onClick={() => scrollHandler(stageIdentify)}
            >
              2. Identifying target readers
            </li>
            <li
              className="contents-of-the-page-li"
              onClick={() => scrollHandler(stageSketches)}
            >
              3. Sketches
            </li>
            <li
              className="contents-of-the-page-li"
              onClick={() => scrollHandler(stagePrototype)}
            >
              4. High fi prototype
            </li>
            <li
              className="contents-of-the-page-li"
              onClick={() => scrollHandler(stageCoding)}
            >
              5. Coding with React
            </li>
            <li
              className="contents-of-the-page-li"
              onClick={() => scrollHandler(stageConclusion)}
            >
              6. Conclusion & Reflections
            </li>
          </ul>
        </div>
        <div className="text-container researchQuestion">
          <h3> Research question:</h3>
          <h1 className="research-question">
            "How can I design a portfolio in a way that will express the kind of
            IT Professional, I aim to become?"
          </h1>
        </div>
        <div className="text-container highlighted">
          <p className="stage-explanation-text">
            Sub question: "What kind of an IT professional do I want to become?"
          </p>
        </div>
        <div className="text-container" ref={stageInsights}>
          <h3 className="stage-title">
            1. Gathering fundamental stageInsights (through CMD methods)
          </h3>
          <p className="stage-explanation-text">
            I aspire to create a portfolio that seamlessly aligns with the
            current design trends and strategies, in order to showcase a
            portfolio that increases my chances of getting hired. Hence, I took
            some time to do an online research through famous platforms for
            design inspirations such as Awwards, Dribble etc.
          </p>
          <h3 className="learning-outcomes">
            <span class="fire html-1">🔥</span>Learning outcome 5: Investigative
            problem solving:
          </h3>
          <p className="stage-explanation-text">
            The other research methos I used are described as:
          </p>
          <p>
            <ul className="bulletpoints">
              <li className="list-item">Available product analysis</li>
              <li className="list-item">Design pattern research</li>
              <li className="list-item">Best good and bad practices</li>
            </ul>
          </p>

          <h3 className="learning-outcomes">
            <span class="fire html-1">🔥</span> Learning outcome 1: User
            interaction (analysis & advice):
          </h3>
          <p className="stage-explanation-text left-border">
            <strong>Some results are</strong> - there is a great variety of
            designs and creative storytelling techniques that inspired me
            further in the process. Patterns like uniquelly shaped cursors, lots
            of animations, fancy transitions(to demonstrate CSS skills), and
            minimalistic designs with a smaller width of text were used in the
            designs.
          </p>
        </div>
        <div className="text-container" ref={stageIdentify}>
          <h3 className="stage-title">2. Identifying target readers</h3>

          <h3 className="learning-outcomes">
            <span class="fire html-1">🔥</span> Learning outcome 7:
            Goal-oriented interaction:
          </h3>
          <p className="stage-explanation-text">
            As for any project, it is important to identify the target audience
            that will be interacting with the interface and to recognize what my
            mentors are expecting to see from me as a student.
          </p>

          <p className="stage-explanation-text">
            My stakeholders are my teachers, which brings some requirements such
            as - the Reading guide should be easy to access and followable, the
            Learning outcomes should be clear. What I have learned through the
            challenge of the project, in a more User Experience aspect is that
            good filtering and intuitive navigation is of great importance for
            products like portfolios, so that my projects are effortless to read
            through and have a logical storyline.
          </p>
          <img src={PortfolioHighFi} className="image-portfolio" />
        </div>
        <div className="text-container" ref={stageSketches}>
          <h3 className="stage-title">3. Sketches</h3>
          <p className="stage-explanation-text">
            I initially conducted a few rounds of low-fidelity testing, but soon
            transitioned to engaging in brainstorming sessions and iterating
            with high-fidelity designs.
          </p>
          <p className="stage-explanation-text">
            The testing process primarily involved my team members and teachers,
            utilizing A/B and Brand testing methods. My brainstorming phase
            extensively involved paper prototypes, which allowed me to explore
            ideas quickly. Subsequently, I swiftly shifted my focus towards
            refining the designs using high-fidelity prototypes.
          </p>
          <img src={PortfolioSketches} className="image-portfolio" />
        </div>
        <div className="text-container" ref={stagePrototype}>
          <h3 className="stage-title">4. High fi prototype</h3>

          <h3 className="learning-outcomes">
            <span class="fire html-1">🔥</span> Learning outcome 2: User
            interaction (execution & validation):
          </h3>
          <p className="stage-explanation-text">
            As evident from the Fifma file, I went through numerous iterations
            of the High-Fidelity prototype, investing a significant amount of
            time in refining the layout and visual aesthetics.
          </p>
          <h3 className="learning-outcomes">
            <span class="fire html-1">🔥</span> Learning outcome 1: User
            interaction (analysis & advice):
          </h3>
          <p className="stage-explanation-text left-border">
            A valuable lesson I learned during this process was not to dedicate
            excessive time to envisioning the interface's appearance, but rather
            to start coding as early as possible. Unforeseen imperfections often
            emerge only during the implementation phase, and it is through
            writing the code that they become apparent.
          </p>
        </div>
        <div className="text-container highlighted">
          <p className="stage-explanation-text">
            Here is the{" "}
            <a href="https://www.figma.com/file/Poo1UBGXRFSVixzdZk8hZZ/Portfolio-Prototype?type=design&node-id=0-1&t=kDr7lUbRz9KocBvS-0">
              Figma File
            </a>{" "}
            with my design iterations on a Hi Fi level.
          </p>
        </div>
        <div className="text-container" ref={stageCoding}>
          <h3 className="stage-title">5. Coding with React</h3>

          <h3 className="learning-outcomes">
            <span class="fire html-1">🔥</span> Learning outcome 3: Software
            design:
          </h3>
          <p className="stage-explanation-text">
            The portfolio is built using React.js and plain CSS. I intentionally
            avoided using any libraries or packages, instead opting to construct
            the entire code structure from scratch. I specifically chose to work
            with React because it allows me to enhance my coding skills and
            explore new techniques for developing responsive websites and
            writing efficient code.
          </p>
          <p className="stage-explanation-text">
            Looking ahead, one improvement I plan to make is moving the text
            content in the components to a separate JSON file and mapping it
            from there. Additionally, I intend to declare global CSS variables
            to eliminate repetitive styling across multiple files.
          </p>
          <img src={CodeSnippetPortfolio} className="image-portfolio" />
        </div>
        <div className="text-container highlighted">
          <p className="stage-explanation-text">
            If you want to further have a look at my portfolio's code,{" "}
            <a href="https://github.com/workgit-code/Portfolio-S6">
              here is a link
            </a>{" "}
            to my GitHub repository
          </p>
        </div>
        <div className="text-container" ref={stageConclusion}>
          <h3 className="stage-title">6. Conclusion & Reflection</h3>

          <h3 className="learning-outcomes">
            <span class="fire html-1">🔥</span> Learning outcome 6: Personal
            leadership,
          </h3>
          <h3 className="learning-outcomes">
            <span class="fire html-1">🔥</span> Learning outcome 7:
            Goal-oriented interaction:
          </h3>
          <p className="stage-explanation-text">
            Throughout my studies at Fontys, I have been contemplating this
            question, and not just limited to this semester. However, it was in
            Advanced Media where I had the opportunity to truly reflect on my
            aspirations for the future.
          </p>
          <p className="stage-explanation-text">
            The type of professional I aspire to be is someone who appreciates
            and engages in the aesthetic aspects of design. I thoroughly enjoy
            conceptualizing and envisioning the visual appeal of various
            elements.
          </p>
          <p className="stage-explanation-text">
            Moreover, I find myself drawn to the coding side of implementation.
            I have a genuine interest in understanding how to bring ideas to
            life through technical means.
          </p>
          <p className="stage-explanation-text left-border">
            As for a final response to the question at hand, I must admit that
            it is a journey that I will continue to explore throughout my
            career. However, at this moment, I consider myself a Creative
            Designer. I derive great satisfaction from designing user interfaces
            and experimenting with different technologies, driven by a deep
            curiosity about their functionality and the immense power of media,
            even on a technical level.
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

export default ProjectPortfolio;
