import React from "react";
import styled from "styled-components";
import KITSLogo from "../../assets/images/kits-logo.svg";
import AsATutor from "../../assets/icons/as-tutor.svg";
import { Button } from "components/Button/Button";
import FacebookIcon from "../../assets/icons/facebook-icon.svg";
import GoogleIcon from "../../assets/icons/google-icon.svg";

const StyledLogIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #def2f3;
  .logo {
    padding-top: 81px;
    padding-bottom: 54px;
  }
  .main {
    .as-a-student {
      padding-bottom: 41px;
    }
    padding-left: 151px;
    padding-right: 151px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    aspect-ratio: 1;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(42px);
    input.info {
      width: 100%;
      height: 49px;
      flex-shrink: 0;
      border-radius: 15px;
      background: #fff;
      border: 0;
      padding-left: 29px;
      margin-bottom: 44px;
    }
  }
  .remember-me-forgot-password {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 40px;
  }
  .or-sign-in {
    padding-top: 39px;
    padding-bottom: 32px;
  }
  .login-with-other-method {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

const LogIn = () => {
  return (
    <StyledLogIn>
      <img className="logo" src={KITSLogo} alt="" />
      <div className="main">
        <img src={AsATutor} alt="" />
        <div className="as-a-student">As an instructor/ Tutor</div>
        <input className="info" type="text" placeholder="Full name" />
        <input className="info" type="text" placeholder="Password" />
        <div className="remember-me-forgot-password">
          <div>
            <input type="checkbox" name="" id="" /> Remember me
          </div>
          <div>
            <a href="">Forgot Password</a>
          </div>
        </div>
        <Button
          width={"218px"}
          height={"69px"}
          borderRadius={"31px"}
          bgColor={"#0C4CA3"}
        >
          Sign In
        </Button>
        <div className="or-sign-in">Or Sign In</div>
        <div className="login-with-other-method">
          <Button
            width={"218px"}
            height={"60px"}
            borderRadius={"39px"}
            bgColor={"#FFF"}
            textColor={"#898686"}
            fontSize={"16px"}
          >
            <img src={GoogleIcon} alt="" /> with Google
          </Button>
          <Button
            width={"218px"}
            height={"60px"}
            borderRadius={"39px"}
            boderColor={"#34BCAD"}
            bgColor={"rgba(255, 255, 255, 0.2)"}
            textColor={"#898686"}
            fontSize={"16px"}
          >
            <img src={FacebookIcon} alt="" /> with Facebook
          </Button>
        </div>
      </div>
    </StyledLogIn>
  );
};

export default LogIn;
