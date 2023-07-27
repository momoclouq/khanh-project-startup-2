import styled from "styled-components";
import "../../App.css";
import curve from "assets/images/curve.svg";
import playIcon from "assets/icons/playicon.svg";
import waveCheckIcon from "assets/icons/wave-check.svg";
import girlImage from "assets/images/home-page-girl.png";
import studentIcon from "assets/icons/student.svg";
import emailIcon from "assets/icons/email.svg";
import groupStudentIcon from "assets/icons/group-student.svg";
import { Button } from "components/Button/Button";
import { useMediaQuery } from "react-responsive";

import avatar1 from "assets/images/avatars/avatar1.svg";
import avatar2 from "assets/images/avatars/avatar2.svg";
import avatar3 from "assets/images/avatars/avatar3.svg";
import showMore from "assets/icons/show-more.svg";

const SliderStyled = styled.div`
  height: 1000px;
  width: calc(100vw - var(--scrollbar-width));
  margin-left: calc(50% - 50vw);
  /* background-color: orange; */
  background: #f7f7f7;

  /* .welcome-wrapper{
        max-width: var(--max-width-home);
        margin: 0 auto;
    } */
  .welcome {
    padding-top: 300px;
    max-width: 750px;
  }
  .wrapper-welcome {
    position: relative;
  }
  @media screen and (max-width: 1224px) {
    .wrapper-welcome {
      display: flex;
      justify-content: center;
    }
  }
  .welcome-header {
    font-size: 64px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    color: #2e2c2c;
  }
  .welcome-header-blue {
    color: #0c4ca3;
    display: block;
  }
  .welcome-desc {
    color: #96989b;
    font-size: 20px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    line-height: 193.5%;
    max-width: 630px;
  }
  .play-now {
    width: 84px;
    height: 84px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: center;
    box-shadow:
      0px -4px 10px 0px rgba(52, 188, 173, 0.25),
      0px 4px 10px 0px rgba(52, 188, 173, 0.25);
    img {
      width: 52px;
      height: 52px;
    }
  }
  .join-and-play {
    display: flex;
    align-items: center;
  }
  .join-and-play-btn {
    margin-right: 40px;
  }
  .play-now {
    margin-right: 13px;
  }
  .play-now-text {
    color: #2e2c2c;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .wave-check {
    margin-top: 75px;
    ul {
      list-style-type: none;
      display: flex;
    }
    img,
    p {
      display: inline-block;
    }
    li {
      display: flex;
      align-items: center;
    }
  }
  .welcome-img {
    position: absolute;
    right: 5%;
    top: 5%;
  }
  .congratulations {
    position: absolute;
    top: 0;
    display: flex;
    width: 217px;
    border-radius: 24px;
    background-color: #fff;
    box-shadow: 0px 4px 10px 0px #0000000d;
    box-shadow: 0px -4px 10px 0px #0000000d;
    padding: 13px 21px 15px;

    .congratulation-text {
      margin-left: 8px;
      color: #504e4e;
      font-style: normal;
      line-height: normal;
      .congratulation-title {
        font-size: 16px;
        font-weight: 600;
      }
      .congratulation-desc {
        font-size: 10px;
        font-weight: 500;
      }
    }
  }
  .interactive {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 172px;
    border-radius: 24px;
    background-color: #fff;
    box-shadow: 0px 4px 10px 0px #0000000d;
    box-shadow: 0px -4px 10px 0px #0000000d;
    padding: 18px;
    color: #504e4e;
    font-style: normal;
    line-height: normal;

    .interactive-quality {
      font-size: 16px;
      font-weight: 600;
    }
    .congratulation-desc {
      font-size: 14px;
      font-weight: 500;
    }
  }
  .students {
    position: absolute;
    background-color: #fff;
    bottom: 0;
    width: 240px;
    border-radius: 24px;
    box-shadow: 0px 4px 10px 0px #0000000d;
    box-shadow: 0px -4px 10px 0px #0000000d;

    display: flex;
    flex-direction: column;
    align-items: center;
    .avatar {
      cursor: pointer;
      position: relative;
      /* height: 54px;
            width: 54px; */
      border-radius: 50%;
      /* border: 2px solid white; */
      float: left;
      margin-left: -18px;
      transition: all 100ms ease-in-out;
    }
    .show-more {
      height: 58px;
      width: 58px;
      background: linear-gradient(0deg, #d9d9d9, #d9d9d9),
        linear-gradient(0deg, #ffffff, #ffffff);
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid white;
    }
    .student-quality {
      padding: 8px 0 8px;
      color: #504e4e;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 21px;
      span {
        margin-right: 8px;
      }
    }
    .avatar-container {
      padding-bottom: 16px;
    }
  }
`;
const Slider = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <SliderStyled>
      <div className="wrapper-home-details-about-pricing wrapper-welcome">
        <div className="welcome">
          <p className="welcome-header">
            Access Your Class From
            <span className="welcome-header-blue">Anywhere & Anytime</span>
          </p>
          <p className="welcome-desc">
            A solution for easy and flexible online learning, you can study
            anywhere and at anytime on this platform
          </p>
          <img src={curve} alt="" />

          <div className="join-and-play">
            <div className="join-and-play-btn">
              <Button>Join For Free</Button>
            </div>
            <div className="play-now">
              <img src={playIcon} alt="" />
            </div>
            <p className="play-now-text">Play now</p>
          </div>

          <div className="wave-check">
            <ul>
              <li>
                <img src={waveCheckIcon} alt="" />
                <p className="wave-title">Experienced Instructors</p>
              </li>
              <li>
                <img src={waveCheckIcon} alt="" />
                <p className="wave-title">Quality Videos</p>
              </li>
              <li>
                <img src={waveCheckIcon} alt="" />
                <p className="wave-title">Affordable Prices</p>
              </li>
            </ul>
          </div>
        </div>

        {!isTabletOrMobile && (
          <div className="welcome-img">
            <img src={girlImage} alt="" />
            <div className="congratulations">
              <img src={emailIcon} alt="" />
              <div className="congratulation-text">
                <p className="congratulation-title">congratulations</p>
                <p className="congratulation-desc">
                  You have successfully completed this Course
                </p>
              </div>
            </div>

            <div className="interactive">
              <img src={studentIcon} alt="" />
              <p className="interactive-quality">10,000+</p>
              <p className="interactive-title">Interactive Courses</p>
            </div>

            <div className="students">
              <div className="student-quality">
                <span>30k Students</span>
                <img src={groupStudentIcon} alt="" />
              </div>
              <div class="avatar-container">
                <div class="avatar">
                  <img src={avatar1} alt="" />
                </div>
                <div class="avatar">
                  <img src={avatar2} alt="" />
                </div>
                <div class="avatar">
                  <img src={avatar3} alt="" />
                </div>
                <div class="avatar show-more">
                  <img src={showMore} alt="" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </SliderStyled>
  );
};

export default Slider;
