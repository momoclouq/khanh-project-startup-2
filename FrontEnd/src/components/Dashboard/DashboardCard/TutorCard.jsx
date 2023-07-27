import styled from "styled-components";
import verifiedIcon from "../../../assets/icons/dashboardicon/verified2-icon.svg";
import ratingIcon from "../../../assets/icons/dashboardicon/rating-icon.svg";

const CardStyled = styled.div`
  width: 225px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  border-radius: 13px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(42px);
  padding: 16px 14px 20px 14px;
  .rating-group {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }
  .avatar-group {
    position: relative;
    .verified-icon {
      position: absolute;
      left: -10px;
    }
  }
  .tutor-name,
  .tutor-school,
  .status {
    font-family: Poppins;
    font-style: normal;
    line-height: normal;
  }
  .tutor-name {
    color: #2e2c2c;
    font-size: 16px;
    font-weight: 600;
  }
  .tutor-school {
    color: #8c8888;
    font-size: 11px;
    font-weight: 400;
  }
  .status {
    color: #0c4ca3;
    font-size: 11px;
    font-weight: 400;
  }
  /* :hover{
    transform: scale(1.05);
  } */
`;
export const TutorCard = ({
  bgColor,
  avatar,
  tutorName,
  tutorSchool,
  rating,
  status,
  onMouseEnter,
  onMouseLeave,
  isBook,
  isVerified,
}) => {
  return (
    <CardStyled
      bgColor={bgColor}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="rating-group">
        <img src={ratingIcon} alt="" />
        <span>{rating}</span>
      </div>
      <div className="avatar-group">
        <img className="avatar" src={avatar} alt="" />
        {isVerified && (
          <img className="verified-icon" src={verifiedIcon} alt="" />
        )}
      </div>
      <div className="tutor-name">{tutorName}</div>
      <div className="tutor-school">{tutorSchool}</div>
      <div className="status">{status}</div>
    </CardStyled>
  );
};
