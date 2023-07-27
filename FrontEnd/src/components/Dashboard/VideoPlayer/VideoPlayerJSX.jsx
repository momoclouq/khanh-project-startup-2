import styled from "styled-components";
import React from "react";
import { ReactComponent as ResoursesIcon } from "../../../assets/icons/dashboardicon/resourses-icon.svg";
import { ReactComponent as DownloadIcon } from "../../../assets/icons/dashboardicon/Download-Icon.svg";
import ReactPlayer from "react-player";

const PageStyled = styled.div`
  width: 90%;
  height: 700px;
  margin: 52px 0px 0px 72px;
  border-radius: 4px;
  gap: 31px;
  display: flex;
  flex-direction: row;
  .player-container {
    width: 75%;
    height: 683.372px;
    border-radius: 15px;
    border: 4px solid #f5841f;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(17.5px);
  }
  .resourse-bar {
    width: 20%;
    height: 683.372px;
    background-color: transparent;
    color: #fff;
    font-family: Poppins;
    font-style: normal;
    line-height: normal;
  }
  .resourse-bar .resourse {
    padding-bottom: 40px;
    padding-top: 30px;
    box-shadow: 0 1px 0 0 rgba(0, 171, 189, 0.36);
    text-align: center;
    font-size: 25px;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  .resourse-bar .pdf {
    box-shadow: 0 1px 0 0 rgba(0, 171, 189, 0.36);
    padding: 28px 0px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 5px;
  }
  .resourse-bar .pdf .left {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`;

export const VideoPlayerJSX = ({ vidLink }) => {
  return (
    // <PageStyled>
    //   <h2>{linkArray}</h2>
    //   {linkArray?.map(video => {
    //   <iframe
    //     width="1280"
    //     height="720"
    //     src={video}
    //     title="Marvel Studios&#39; Avengers: Endgame - Official Trailer"
    //     frameborder="0"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //     allowfullscreen
    //   ></iframe>
    //   })}
    // </PageStyled>

    <PageStyled>
      {/* <ul>
        {linkArray.map((linkCom, index) => (
          <li key={index}>
              <YouTubeEmbed id={linkCom} />
          </li>
        ))}
      </ul> */}
      <div className="player-container">
        <ReactPlayer
          width="99%"
          height="99%"
          style={{ borderRadius: "15px" }}
          url={vidLink}
          controls
        />
      </div>
      <div className="resourse-bar">
        <div className="resourse">
          <ResoursesIcon />
          Resources
        </div>
        <div className="pdf">
          <div className="left">
            <ResoursesIcon />
            Intro to UX.pdf
          </div>
          <DownloadIcon />
        </div>
        <div className="pdf">
          <div className="left">
            <ResoursesIcon />
            Intro to UX.pdf
          </div>
          <DownloadIcon />
        </div>
      </div>
    </PageStyled>
  );
};
