import styled from "styled-components";
import React, { useState } from "react";
import { ReactComponent as CourseIcon } from "../../../assets/icons/dashboardicon/couse-title.svg";
import { ReactComponent as ShareScreenIcon } from "../../../assets/icons/dashboardicon/share-screen.svg";
import { ReactComponent as MuteIcon } from "../../../assets/icons/dashboardicon/mute-unmute.svg";
import { ReactComponent as ChangeCamIcon } from "../../../assets/icons/dashboardicon/change-cam.svg";
import { ReactComponent as EndCallIcon } from "../../../assets/icons/dashboardicon/end-call.svg";
import { ReactComponent as ResoursesIcon } from "../../../assets/icons/dashboardicon/resourses-icon.svg";
import { ReactComponent as DownloadIcon } from "../../../assets/icons/dashboardicon/Download-Icon.svg";
import { ReactComponent as AttachIcon } from "../../../assets/icons/dashboardicon/attachIcon.svg";

const PageStyled = styled.div`
  position: relative;
  margin: 0px 0px 0px 15px;
  h1 {
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 35px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .video-container {
    width: 98%;
    display: flex;
    flex-direction: row;
  }
  .video-left,
  .video-right {
    width: 50%;
    height: 464px;
    flex-shrink: 0;
    background-color: gray;
  }
  .video-left {
    border-radius: 30px 0px 0px 30px;
  }
  .video-right {
    border-radius: 0px 30px 30px 0px;
  }
  .button-group {
    position: relative;
    bottom: 100px;
    display: flex;
    flex-direction: row;
    width: 55%;
    justify-content: space-between;
    margin: 0px 0px 0px 32px;
  }
  .button-group .middle-group {
    display: flex;
    flex-direction: row;
    width: 31%;
    justify-content: space-between;
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
  .bottom-contents {
    display: flex;
    flex-direction: row;
    padding: 0px 0px 0px 100px;
    gap: 184px;
  }
  .bottom-contents .file-upload {
    height: 71px;
    width: 60%;
    border-radius: 14px;
    padding: 0px 30px 0px 17px;
    background: rgba(113, 109, 109, 0.5);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .bottom-contents .file-upload .button {
    color: #00abbd;
    text-align: center;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background-color: transparent;
    cursor: pointer;
  }
  .bottom-contents .file-upload .input-group {
    width: 133px;
    height: 49px;
    flex-shrink: 0;
    border-radius: 8px;
    padding: 0px 13px 0px 15px;
    background: linear-gradient(166deg, #00abbd 0%, #f5841f 100%);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  #file-input {
    width: 90px;
    display: none;
  }
  #file-input-label {
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
  }
`;
export const VideoCallContent = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {};
  return (
    <PageStyled>
      <h1>
        {" "}
        <CourseIcon /> This is Title{" "}
      </h1>
      <div className="video-container">
        <div className="video-left"></div>
        <div className="video-right"></div>
      </div>
      <div className="button-group">
        <ShareScreenIcon cursor="pointer"/>
        <div className="middle-group">
          <MuteIcon cursor="pointer"/>
          <ChangeCamIcon cursor="pointer"/>
          <EndCallIcon cursor="pointer"/>
        </div>
      </div>
      <div className="bottom-contents">
        <div className="file-upload">
          <div className="input-group">
            <AttachIcon />
            <input
              type="file"
              name="file"
              id="file-input"
              onChange={changeHandler}
            />
            <label id="file-input-label" for="file-input">
              Attach File
            </label>
          </div>

          <div className="button" onClick={handleSubmission}>
            Send
          </div>
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
      </div>
    </PageStyled>
  );
};
