import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import "../stylesheets/About.css";
import ProfileImage from "../Images/ProfileImage.JPG";

function About() {
  return (
    <div>
      <div className="container main-text">
        <div>
          <h1 className="title">Digital designer & Developer</h1>
          <div className="introduction">
            <img src={ProfileImage} className="profile-image" />
            <h1 className="title">Sesil M. Tasim</h1>
            {/* <i class="fa fa-regular fa-arrow-down fa-2x "></i> */}
          </div>
        </div>
        {/* <div className="my-services-container">
          <h1 className="">My services</h1>

          <div className="my-services-text-container">
            <div className="service">
              <h2>UI/UX Design</h2>
              <p className="my-services-text">
                Studying user behavior and investigating the relationship
                between technology and humans is where my interest lies. I love
                researching human behaviour, getting to know our habits around
                and about technology, and how can I aid human needs into tech
                solutions.
              </p>
            </div>

            <div className="service">
              <h2>Web Design</h2>
              <p className="my-services-text">
                Web design for me is not only solving problems by designing
                efficient functionalities, but also expressing art and
                aesthetics, which with the right proportions lead to user
                satisfaction and fulfillment.
              </p>
            </div>

            <div className="service">
              <h2>Front-end developement</h2>
              <p className="my-services-text">
                I love making my designs come alive and entering into the lifes
                of users, hence it comes as no surprise that front-end
                development is another way of problem-solving for me that I
                enjoy doing.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default About;
