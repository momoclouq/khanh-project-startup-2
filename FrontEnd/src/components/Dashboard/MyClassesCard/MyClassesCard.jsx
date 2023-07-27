import styled from "styled-components";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
const DivStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;
    color: #8c8888;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .right-card {
    display: flex;
    width: 17px;
    height: 17px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #d9d9d9;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: #8c8888;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .head > svg {
    circle {
      fill: "red";
    }
    fill: "red";
  }

  @media screen and (max-width: 1224px) {
    justify-content: center;
  }
`;
const CircleIcon = ({ fill }) => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle id="Ellipse 9" cx="4" cy="4" r="4" fill={fill} />
  </svg>
);
export const MyClassesCard = ({ newColor, name, quantity, path }) => {
  const location = useLocation();
  const { id, orderId } = useParams();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <NavLink
      to={path}
      style={
        location.pathname === `/mainboard/${orderId}/video-player/${id}` ||
        location.pathname === `/mainboard/${orderId}/video-call`
          ? { justifyContent: "center" }
          : null
      }
    >
      <DivStyled newColor={newColor} name={name} quantity={quantity}>
        <div className="left">
          <CircleIcon fill={newColor} />
          {!isTabletOrMobile &&
            location.pathname !== `/mainboard/${orderId}/video-player/${id}` &&
            location.pathname !== `/mainboard/${orderId}/video-call` && (
              <>{name}</>
            )}
        </div>
        {!isTabletOrMobile &&
          location.pathname !== `/mainboard/${orderId}/video-player/${id}` &&
          location.pathname !== `/mainboard/${orderId}/video-call` && (
            <div className="right-card">{quantity}</div>
          )}
      </DivStyled>
    </NavLink>
  );
};
