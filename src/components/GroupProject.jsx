import React, { useState, useEffect, useRef } from "react";
import "font-awesome/css/font-awesome.min.css";
import "../stylesheets/GroupProject.css";
import "../stylesheets/ProjetcPortfolio.css";
import SimacCompanyVisit from "../Images/SimacCompanyVisit.jpg";
import AffinityMap from "../Images/AffinityMapSimac.png";
import CompetitiveAnalysis from "../Images/CompetitiveAnalysis.png";
import ConceptBrainstorming from "../Images/ConceptBrainstorming.png";
import SimacLowFiPrototype from "../Images/SimacLowFiPrototype.png";
import SimacHighFiPrototype from "../Images/SimacHighFiPrototype.png";
import InfographicsSprintOne from "../Images/InfographicsSprintOne.png";

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
          <h3 className="contents-headline">CONTENTS OF THIS READ:</h3>
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
            <li
              className="contents-of-the-page-li"
              onClick={() => scrollHandler(sprintThree)}
            >
              Sprint 4 - High Fidelity implimentation + Testing
            </li>
          </ul>
        </div>
        <div className="text-container researchQuestion">
          <h3> Research question:</h3>
          <h1 className="research-question">
            How can we enhance the onboarding process for international
            proffesionals at Simac.nl?
          </h1>
        </div>
        {/* STAGE 1 */}
        <div className="text-container" ref={sprintOne}>
          <h3 className="stage-title">
            Sprint 1 - Explore onboarding process by understanding and defining
            the target audience
          </h3>
          {/* <div className="lo-chips">
            <p>Learning outcome 1: User interaction (analysis & advice) </p>
          </div> */}
          <p className="stage-explanation-text">
            As a group, we prioritized the equitable distribution of work on the
            project, ensuring that each team member had their fair share of
            responsibilities. In this discussion, I will primarily focus on
            highlighting my individual contributions.
          </p>
          <h3 className="learning-outcomes">
            <span class="fire html-1">🔥</span> Learning outcome 5:
            Investigative problem solving:
          </h3>
          <p className="stage-explanation-text">
            During the initial Sprint of the project, I collaborated with a team
            member to conduct comprehensive{" "}
            <a href="https://stichtingfontys-my.sharepoint.com/:f:/r/personal/461891_student_fontys_nl/Documents/Semester%206%20Portfolio/Competitive%20analysis?csf=1&web=1&e=itVg7a">
              Competitor research
            </a>
            . This research proved to be highly insightful as it enabled us to
            explore and analyze the offerings provided by other prominent IT
            giants within the company, specifically targeting the needs and
            requirements of newly hired foreign employees.
          </p>

          <h3 className="learning-outcomes">
            <span class="fire html-1">🔥</span> Learning outcome 1: User
            interaction (analysis & advice):
          </h3>
          <p className="stage-explanation-text left-border">
            Among these companies, we found a common trend of providing services
            to enhance onboarding. They use <strong>onboarding videos</strong>,
            available on platforms like YouTube, to introduce and guide new
            employees. They also employ <strong>apps/websites</strong>,{" "}
            <strong>gamification techniques</strong>, facilitate{" "}
            <strong>feedback exchange</strong> and{" "}
            <strong>language adaptation</strong>.
          </p>
          <img src={CompetitiveAnalysis} className="image-portfolio" />
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

          <h3 className="learning-outcomes">
            <span class="fire html-1">🔥</span> Learning outcome 1: User
            interaction (analysis & advice),
          </h3>
          <h3 className="learning-outcomes">
            <span class="fire html-1">🔥</span> Learning outcome 7:
            Goal-oriented interaction:
          </h3>

          <p className="stage-explanation-text">
            To clearly share our sprint results with the client, we created
            visual Infographics. By summarizing our findings and work in visual
            formats, the client could easily understand our progress without
            having to read lengthy documents. We also provided detailed
            documentation as email attachments in case they needed more
            information.
          </p>

          <img src={InfographicsSprintOne} className="image-portfolio" />
        </div>
        {/* STAGE 2 */}
        <div className="text-container" ref={sprintTwo}>
          <h3 className="stage-title">
            Sprint 2 - Converging the data we have and defining user requirments
            by highlight prelimenary research
          </h3>

          <h3 className="learning-outcomes">
            <span class="fire html-1">🔥</span> Learning outcome 1: User
            interaction (analysis & advice):
          </h3>
          <p className="stage-explanation-text">
            We are following the Double Diamond design model, which means that
            if the previous sprint was dedicated to diverging research data and
            engaging in brainstorming sessions, this sprint focuses on
            converging and filtering that data into more refined pieces. In
            addition, this sprint emphasizes the crucial steps of Defining and
            Empathizing with the target audience. As a result of this process,
            we have achieved a clearer problem statement and gained insights
            into our target audience.
          </p>
          <p className="stage-explanation-text left-border">
            <strong>From the interviews</strong> we discovered that:
            <p className="stage-explanation-text ">
              <ul className="bulletpoints">
                <li className="list-item">
                  &#128073; Many employees at Simac are <strong>unaware</strong>{" "}
                  of who their coaches are.
                </li>
                <li className="list-item">
                  &#128073; There is a strong emphasis on{" "}
                  <strong>individual and career growth </strong>
                  among the majority of employees.
                </li>
                <li className="list-item">
                  &#128073; We also found that there is a high level of interest
                  among employees in participating in{" "}
                  <strong>more team-bonding events</strong>.
                </li>
              </ul>
            </p>
          </p>

          <p className="stage-explanation-text">
            Personally, my focus during this phase was on defining the User
            Requirements and conducting thorough analysis of the Interviews. The
            methods listed:
          </p>

          <ul className="bulletpoints">
            <li className="list-item">
              <a href="https://stichtingfontys-my.sharepoint.com/:f:/r/personal/461891_student_fontys_nl/Documents/Semester%206%20Portfolio/Interviews?csf=1&web=1&e=5vS0bP">
                Interviews analysis
              </a>
            </li>
            <li className="list-item">Affinity mapping</li>
            <li className="list-item">
              <a href="https://stichtingfontys-my.sharepoint.com/:w:/r/personal/461891_student_fontys_nl/Documents/Semester%206%20Portfolio/User%20Requirements.docx?d=wd1b3bd6846354bd891fa8bad109f19fb&csf=1&web=1&e=VSLe8P">
                User Requirements
              </a>
            </li>
            <li className="list-item">
              <a href="https://stichtingfontys-my.sharepoint.com/:f:/r/personal/461891_student_fontys_nl/Documents/Semester%206%20Portfolio/Info%20Graphics?csf=1&web=1&e=nOjxWo">
                Infographics
              </a>
            </li>
          </ul>

          <img src={AffinityMap} className="image-portfolio" />
        </div>
        {/* STAGE 3 */}
        <div className="text-container" ref={sprintThree}>
          <h3 className="stage-title">
            Sprint 3 - Concepting + Design. Iterative design with lots of
            brainstorming
          </h3>
          <p className="stage-explanation-text">
            Before forming the final concept we had a few other ones that were
            discarded as they didn't fit in the requirements of the project.
          </p>
          <p className="stage-explanation-text">
            What is important as we had multiple iterations and modifications to
            the final idea in ordrer to contribute with a solution that will
            convince the clients that our product will solve an existing problem
            efficiently.
          </p>

          <img src={ConceptBrainstorming} className="image-portfolio" />

          <h3 className="learning-outcomes">
            <span class="fire html-1">🔥</span> Learning outcome 5:
            Investigative problem solving:
          </h3>
          <p className="stage-explanation-text left-border">
            Example: We decided to let go of the app idea involving the Personal
            Development Plan (PDP) because it had too much of an HR focus, and
            the app was becoming too complex with multiple functions. Our goal
            was to create a simpler app that focuses on single objectives and
            straightforward goals.(the image below shows the brainstorming of my
            first concepts).
          </p>
          <div className="text-container highlighted">
            <p className="stage-explanation-text">
              <strong>THE CONCEPT - </strong> SIMAC IN presents weekly or daily
              "socializing challenges" through notifications and guides you to
              the Wheel of Fortune, where you can spin to receive a new
              challenge. Upon completing challenges, you earn a collection of
              diverse achievements that contribute to your social status within
              the app.
            </p>
          </div>
          <p className="stage-explanation-text">
            Here are some of the low fi prototypes I did based on the concept:
          </p>
          <img src={SimacLowFiPrototype} className="image-portfolio" />
        </div>
        {/* STAGE 4 */}
        <div className="text-container" ref={sprintThree}>
          <h3 className="stage-title">
            Sprint 4 - High Fidelity implimentation + Testing
          </h3>
          <p className="stage-explanation-text">
            We adhered to our stakeholders' brand style guide while designing
            the app, especially while using the colors. In particular, I took
            charge of designing and implementing the “Wheel of Fortune” feature.
          </p>

          <h3 className="learning-outcomes">
            <span class="fire html-1">🔥</span> Learning outcome 1: User
            interaction (analysis & advice):
          </h3>
          <p className="stage-explanation-text left-border">
            <strong>Why a “Wheel of Fortune”?</strong> I believe that the
            integration of a spinning wheel would invoke{" "}
            <strong>feeling of curiosity</strong> of what challenge might come
            next and it could also be viewed as a playful element of the design.
            I wanted it to be a simple yet satisfying feature to which users
            would be excited to come back to.
          </p>
          <p className="stage-explanation-text">
            I also had to indicate to the user that the wheel can be spinned
            once a day or week, so that was communicated through a visible
            timer, indicating until when the wheel was temporarily disabled.
          </p>
          <img src={SimacHighFiPrototype} className="image-portfolio" />
          <div className="text-container highlighted">
            <p className="stage-explanation-text">
              Figma file with the complete High Fidelity prototype
            </p>
          </div>
        </div>
        {/* STAGE 5 - CONCLUSION */}
        <div className="text-container" ref={sprintThree}>
          <h3 className="stage-title">
            Conclusion: Project Summary and Retrospective
          </h3>
          <p className="stage-explanation-text">
            To enhance the onboarding process for international professionals at
            Simac.nl, we conducted thorough research, defined user requirements,
            and developed a concept called "SIMAC IN."
          </p>
          <p className="stage-explanation-text left-border">
            The assignment’s scope gave us a great range of onboarding
            activities that we can discover, however we sticked to one “hook” as
            we call it: <strong>socializing</strong>.
          </p>
          <p className="stage-explanation-text">
            Through collaborative efforts and iterative design, we created a
            user-friendly app that fosters communication and socialization. Our
            solution aims to streamline the onboarding experience and support
            international professionals in their transition at Simac.nl.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GroupProject;
