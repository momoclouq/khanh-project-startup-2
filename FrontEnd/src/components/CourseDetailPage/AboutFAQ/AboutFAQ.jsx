import styled from "styled-components";
import { FaqCard, WhatYouWouldLearnCard } from "../Card";

const StyledDiv = styled.div`
  height: 2265px;
  display: block;
  background: #fafeff;
  .background-opacity {
    height: 100%;
    background: #fafeff;
    opacity: 0.5;
  }
  .about-instructor {
    display: flex;
    flex-direction: column;
    margin-left: 140px;
  }
  h2 {
    color: #2e2c2c;
    font-size: 32px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 56px;
  }
  .about-instructor-details {
    color: #96989b;
    font-size: 26px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: 214%;
    margin-left: 124px;
    margin-right: 140px;
    text-align: justify;
    margin-bottom: 78px;
  }
  .what-you-would-learn {
    display: flex;
    flex-direction: column;
    margin-left: 140px;
  }
  .wrapper-card-column {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-right: 141.34px;
  }
  .wrapper-card-row {
    display: flex;
    flex-direction: row;
    margin-left: 46px;
    margin-bottom: 67px;
    justify-content: space-between;
  }
  .faq {
    display: flex;
    flex-direction: column;
    margin-left: 140px;
    gap: 44px;
  }
  .faq h2 {
    margin-bottom: 0px;
  }
  @media screen and (max-width: 1315px) {
    .wrapper-card-row {
      flex-direction: column;
      margin-bottom: 0px;
    }
  }
`;

export const AboutFAQ = () => {
  return (
    <StyledDiv>
      <div className="about-instructor">
        <h2>About instructor</h2>
        <div className="about-instructor-details">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </div>
      </div>
      <div className="what-you-would-learn">
        <h2>What you would learn</h2>
        <div className="wrapper-card-column">
          <div className="wrapper-card-row">
            <WhatYouWouldLearnCard></WhatYouWouldLearnCard>
            <WhatYouWouldLearnCard></WhatYouWouldLearnCard>
          </div>
          <div className="wrapper-card-row">
            <WhatYouWouldLearnCard></WhatYouWouldLearnCard>
          </div>
        </div>
      </div>
      <div className="faq">
        <h2>FAQ’s</h2>
        <FaqCard
          question="Is this course really 100% online? Do I need to attend any classes in person?"
          answer="This course is completely online, so there’s no need to show up to a classroom in person. You can access your lectures, readings and assignments anytime and anywhere via the web or your mobile device."
        ></FaqCard>
        <FaqCard question="What do web designers and developers do?"></FaqCard>
        <FaqCard question="How long does it take to complete the specialization?"></FaqCard>
        <FaqCard question="What background knowledge is necessary?"></FaqCard>
        <FaqCard question="Do I need a certain device to take this course?"></FaqCard>
      </div>
    </StyledDiv>
  );
};
