import React from "react";
import Learn from "assets/images/about-banner.png";
import Why from "assets/images/why-banner.png";
import "./about.css";
const About = () => {
  return (
    <div className="about-container">
      <section className="banner">
        <div>
          <h1>About KITS</h1>
        </div>
      </section>

      <section className="content">
        <div className="description-section">
          <img src={Learn}></img>
          <p>
            KITS's mission is to help bridge the knowledge gap by ensuring that
            students get access to quality tutoring at affordable pricing. KITS
            leverages technology and an army of passionate tutors to help
            students learn successfully.
          </p>
        </div>
        <div>
          <h2>Why tutors choose KITS?</h2>
        </div>

        <div className="why-section">
          <div className="why-col">
            <div className="why-items">
              <h4>Exciting Mission</h4>
              <p>
                KITS's mission excites many of our tutors and aligns with their
                interests in ensuring that the knowledge gap is bridged for
                students so they can get a fair chance at life
              </p>
            </div>
            <div className="why-items">
              <h4>Relentless Passion</h4>
              <p>
                Our tutors are very passionate about teaching and transferring
                knowledge. They recognize the challenges that students face and
                are driven to help ease those challenges
              </p>
            </div>
            <div className="why-items">
              <h4>Unique Opportunity</h4>
              <p>
                KITS offers a unique opportunity for tutors to do well and do
                good. It's a win-win for the tutors and for the students
              </p>
            </div>
          </div>
          <div>
            <img src={Why} alt="why" />
          </div>
          <div className="why-col">
            <div className="why-items">
              <h4>Exciting Mission</h4>
              <p>
                KITS's mission excites many of our tutors and aligns with their
                interests in ensuring that the knowledge gap is bridged for
                students so they can get a fair chance at life
              </p>
            </div>
            <div className="why-items">
              <h4>Exciting Mission</h4>
              <p>
                KITS's mission excites many of our tutors and aligns with their
                interests in ensuring that the knowledge gap is bridged for
                students so they can get a fair chance at life
              </p>
            </div>
            <div className="why-items">
              <h4>Exciting Mission</h4>
              <p>
                KITS's mission excites many of our tutors and aligns with their
                interests in ensuring that the knowledge gap is bridged for
                students so they can get a fair chance at life
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
