import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import "../stylesheets/ProjetcPortfolio.css";
import PortfolioMockup from "../Images/PortfolioMockup.jpg";

function ProjectPortfolio() {
  return (
    <div>
      <div className="container-project-portfolio">
        <div className="title-placeholder">
          <h1 className="project-title-details">My Portfolio</h1>
          <p>
            Website. Prototype. Programming. Front-end. Design thinking process.{" "}
          </p>
        </div>

        <div className="portfolio-text-container">
          <div className="phase-text">
            <h2>Project overview</h2>
            <p>
              Within the contents of the following document, I will give
              insights and explanations of the individual project I have been
              working on for the first 4 weeks of semester 6 of Advanced media.
              During those 4 weeks, I was working on answering/ investigating
              the Main Research question that I came up with at the beginning of
              the project.
            </p>
          </div>

          <div className="phase-text">
            <h2>My Contributions</h2>
            <p>
              I worked on delivering a Portfolio website and the Reading guide
              document. The portfolio that I created and developed has the goal
              of showcasing and proving my progress to the teachers throughout
              the whole semester since all of the projects that I have worked on
              will be explained there.
            </p>
          </div>
        </div>

        <div className="dynamic-navigation">
          <ul className="side-navigation">
            <li>Phase 1</li>
            <li>Phase 2</li>
            <li>Phase 3</li>
            <li>Phase 4</li>
            <li>Phase 5</li>
          </ul>
        </div>

        <div>
          <img src={PortfolioMockup} className="image-portfolio-mockup" />
        </div>
        <div>
          <div className="portfolio-text-container">
            {/* <h2>Research question: </h2> */}
            <div className="phase-text">
              <h2>Research</h2>
              <p>
                The main research question for the Individual project is: “ How
                can I design a portfolio in a way that will express my
                personality and the kind of IT Professional, I aim to become? “
                as the question has 2 sub-layers for investigating: " What kind
                of an IT professional do I want to become " and " How to reflect
                that on the portfolio ".
              </p>
            </div>

            <div className="phase-text">
              <h2>Findings</h2>
              <p>
                Thanks to the experience with my internship, the previous
                semester, I was able to get a glance at what companies seek and
                need in Media design students. I had some conversations with my
                colleagues and mentors, which lead me to realize that people
                with the skill combination of understanding users' needs and
                experiences and being able to build front-end applications are
                quite valuable. After some self-observation, I also came to the
                conclusion that I enjoy working with both the psychological and
                technical aspects of a project. Personally, I think that If I
                want to be a great Digital designer who can provide design
                solutions I have to understand programming as well.
              </p>
            </div>
          </div>

          {/* Project - Section 2 */}

          <div className="portfolio-text-container">
            <div className="phase-text">
              <h2>Methods</h2>
              <ul>
                <li className="methods">Available product analysis</li>
                <li className="methods">Best good and bad practices</li>
                <li className="methods">Design pattern research</li>
                <li className="methods">Stakeholder analysis</li>
                <li className="methods">Prototyping & Testig</li>
              </ul>
            </div>

            <div className="phase-text">
              <h2>Results</h2>
              <p>
                I looked at a lot of beautiful and creative portfolios by UI/UX
                designers and Front-end developers. To sum it up, there was a
                great variety of design and creative storytelling techniques
                that inspired me further in the process. I found out that
                patterns such as differently shaped cursors, lots of animations,
                and fancy transitions(to demonstrate CSS skills) were used in
                the designs. I did a few frames of low-fidelity testing, but
                then I directly brainstormed and iterated with the high-fidelity
                designs. The testing happened more amongst my team members and
                teachers, I showed my designs to our UX/UI teacher too.
              </p>
            </div>
          </div>

          {/* Project - Section 3 */}

          <div className="portfolio-text-container">
            <div className="phase-text">
              <h2>Design</h2>
            </div>

            <div className="phase-text">
              <h2>High-fi Prototype</h2>
              <p>
                I did a few frames of low-fidelity testing, but I quickly
                switched to brainstorming and iterating with high-fidelity
                designs. The testing happened more amongst my team members and
                teachers, with some A/B and Brand testing methods.
              </p>
            </div>
          </div>

          {/* Project - Section 4 */}

          <div className="portfolio-text-container">
            <div className="phase-text">
              <h2>Conclusion</h2>
            </div>

            <div className="phase-text">
              <h2>
                Final design of the portfolio and answear to the research
                question
              </h2>
              <p>
                As soon as I started implementing my portfolio during week 3 I
                realized that the design doesn't click together on the
                application and overall I wasn't really happy with how it turned
                out. I had to do more thinking about what exactly went wrong,
                and after fixing some information architecture and general
                design layout I was more content with the design. In conclusion,
                I proved to myself that spending too much time prototyping on
                Figma is not the best approach, but getting my hands dirty and
                starting with the front-end implementation - only then I can
                face the most realistic problems and fix them right there. I
                think that the first version of my portfolio turned out quite
                well and I managed to implement what I had imagined. I believe
                that I built a good branding of myself by expressing my talents
                and passions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPortfolio;
