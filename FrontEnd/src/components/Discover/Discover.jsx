import styled from "styled-components";
import "./discover.css";

import { Button } from "components/Button/Button";
import { useMediaQuery } from "react-responsive";
import WhyBanner from "assets/images/why2-banner.png";
import JoinBanner from "assets/images/join-banner.png";

import Find from "assets/images/find-icon.svg";
import Prefer from "assets/images/prefer-icon.svg";
import Schedule from "assets/images/schedule-icon.svg";
import Calendar from "assets/images/calendar-icon.svg";
import Note from "assets/images/note-icon.svg";

const DiscoverStyled = styled.div`
  height: 2800px;
  
`;
const Discover = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 970px)" });
  return (
    <DiscoverStyled>
      <section className="content">
        <h1>Why choose KITS tutor?</h1>
        <h4>We don’t just teach, we provide....</h4>
        <div className="why-options">
          <div className="why-element">
            <h2>Impact</h2>
            <p>Highly effective tutoring at affordable prices.</p>
          </div>
          <div className="why-element">
            <h2>Impact</h2>
            <p>Highly effective tutoring at affordable prices.</p>
          </div>
          <div className="why-element">
            <h2>Impact</h2>
            <p>Highly effective tutoring at affordable prices.</p>
          </div>
          <div className="why-element">
            <h2>Impact</h2>
            <p>Highly effective tutoring at affordable prices.</p>
          </div>
          <div className="why-element">
            <h2>Impact</h2>
            <p>Highly effective tutoring at affordable prices.</p>
          </div>
        </div>
        {!isTabletOrMobile && <div className="why-banner-container">
          <img
            className="why-banner"
            src={WhyBanner}
            alt="why-banner"
            width={700}
            height={400}
          ></img>
        </div>}
      </section>

      <section className="join">
        <h1>Transform your life through education</h1>
        <div className="container">
          <div className="join-img">
            <img src={JoinBanner} alt="join" />
          </div>
          <div className="join-description">
            <p>
              Learners around the world are launching new careers, advancing in
              their fields, and enriching their lives
            </p>
            <Button className="join-btn">Join them</Button>
          </div>
        </div>
      </section>

      <section className="ready">
        <h1>Ready to get started with VeritEd?</h1>
        <div className="ready-container">
          <div className="ready-element">
            <img className="img" src={Find} alt="Find" />
            <p>Search for your subject of interest</p>
          </div>

          <div className="ready-element">
            <img className="img" src={Prefer} alt="Prefer" />
            <p>Choose a tutor based on your preferences</p>
          </div>

          <div className="ready-element">
            <img className="img" src={Schedule} alt="Schedule" />
            <p>Schedule your tutoring session</p>
          </div>

          <div className="ready-element">
            <img className="img" src={Calendar} alt="Calendar" />
            <p>Attend your scheduled session</p>
          </div>

          <div className="ready-element">
            <img className="img" src={Note} alt="Note" />
            <p>Provide your feedback</p>
          </div>
        </div>
        <div className="join-button">
          <Button>Join For Free</Button>
        </div>
      </section>
    </DiscoverStyled>
  );
};

export default Discover;
