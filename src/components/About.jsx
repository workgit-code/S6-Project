import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import "../stylesheets/About.css";
import ProfileImage from "../Images/ProfileImage.JPG";
import Drawing from "../Images/Drawing.png";
import Movies from "../Images/Movies.png";
import Cooking from "../Images/Cooking.png";
import Reading from "../Images/Reading.png";

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
        <div className="my-services-container">
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
        </div>

        <div className="in-my-free-time-container">
          <h1 className="in-my-free-time-title ">In my free time</h1>
          <div className="more-about-container">
            <div className="more-about-me"></div>
          </div>

          {/* ************************************************* */}

          <div>
            <div className="gallery">
              <img src={Drawing} alt="Cinque Terre" width="600" height="400" />
              <div className="desc">
                <p>
                  I love putting on some nice music, sipping a cup of warm tea,
                  and drawing.
                </p>
              </div>
            </div>

            <div className="gallery">
              <img src={Movies} alt="Forest" width="600" height="400" />
              <div className="desc">
                {" "}
                <p>
                  Having movie nights with my friends and watching Disney movies
                  is also one of my favorite activities.
                </p>
              </div>
            </div>
          </div>

          <div className="gallery">
            <img src={Cooking} alt="Northern Lights" width="600" height="400" />
            <div className="desc">
              {" "}
              <p>
                Passion for cooking runs deep into the roots of my family,
                naturally, I love spending extra time in the kitchen on the
                weekend.
              </p>
            </div>
          </div>

          <div className="gallery">
            <img src={Reading} alt="Mountains" width="600" height="400" />
            <div className="desc">
              {" "}
              <p className="my-services-text">
                From a young age, I am fond of literature and reading to expand
                my imagination with some good books.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
