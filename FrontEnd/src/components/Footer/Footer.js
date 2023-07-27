import styled from "styled-components";
import "../../App.css";
import kits from "assets/images/kits-logo.svg";
import Media from "components/Media/Media";
import facebookIcon from "assets/icons/facebook.svg";
import tweetIcon from "assets/icons/tweet.svg";
import indeedIcon from "assets/icons/indeed.svg";
import youtubeIconIcon from "assets/icons/youture.svg";
import instagramIcon from "assets/icons/instagram.svg";

import appStore from "assets/images/download_on_appstore.svg";
import googlePlay from "assets/images/google-play-1.png";
const FooterStyled = styled.div`
  background: #0c4ca3;
  height: fit-content;
  width: calc(100vw - var(--scrollbar-width));
  margin-left: calc(50% - 50vw);
  padding: 0px 0px 100px 0px;
  .media {
    display: flex;
    gap: 14px;
    margin-top: 60px;
  }
  .left-footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .left-footer-end {
    color: #fff;
    font-size: 16px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    line-height: 254.5%;
  }
  .left-right-footer {
    height: 100%;
    display: flex;
    padding: 34px 0px;
    justify-content: space-between;
  }
  .right-footer {
    display: flex;
    color: #fff;
    font-size: 22px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
  }
  .right-footer2,
  .right-footer1 {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .right-footer1 > p,
  .right-footer2 > p {
    margin-bottom: 16px;
  }
  /* .right-footer2{
        width: 300px;
    } */
  .right-footer-title {
    font-weight: 500;
    margin-bottom: 18px;
  }
  .right-footer-img {
    position: relative;
    left: -56px;
    top: 6px;
  }
  @media screen and (max-width: 970px) {
  .left-right-footer{
    flex-direction: column;
  }
}
`;
const Footer = () => {
  return (
    <FooterStyled>
      <div className="wrapper-home-details-about-pricing left-right-footer">
        <div className="left-footer">
          <div>
            <div>
              <img src={kits} />
            </div>
            <div className="media">
              <Media icon={facebookIcon} />
              <Media icon={tweetIcon} />
              <Media icon={indeedIcon} />
              <Media icon={youtubeIconIcon} />
              <Media icon={instagramIcon} />
            </div>
          </div>
          <p className="left-footer-end">
            © Copyright Leon Inc 2023. All rights reserved
          </p>
        </div>

        <div className="right-footer">
          <div className="right-footer1">
            <div>
              <p className="right-footer-title">Useful Links</p>
              <p>Safety and Security Policies</p>
              <p>About</p>
              <p>Pricing</p>
              <p>Value Code</p>
              <p>Legal</p>
            </div>
            <div>
              <img className="right-footer-img" src={appStore} />
            </div>
          </div>

          <div className="right-footer2">
            <div>
              <p className="right-footer-title">Contact Us</p>
              <p>support@kits.com</p>
              <p>1-800-200-300</p>
              <p>3500 Deer Crock Rd Palo Alto,CA</p>
            </div>
            <div>
              <img src={googlePlay} />
            </div>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
};
export default Footer;
