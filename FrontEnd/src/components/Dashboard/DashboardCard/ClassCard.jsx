import styled from "styled-components";
import StarRatings from "react-star-ratings";

const CardStyled = styled.div`
  width: 375px;
  height: 422px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow:
    0px 4px 34px 0px rgba(0, 0, 0, 0.05),
    0px -4px 34px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 15px;
  .thumb-container {
    position: relative;
    height: 233px;
    width: 100%;
  }
  .thumb-container img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .tutor-inf {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 13px 0px 5px 26px;
    gap: 17px;
  }
  .tutor-inf img {
    width: 43px;
    height: 43px;
    border-radius: 43px;
  }
  .course-name {
    width: 100%;
    padding: 0px 38px;
  }
  .rating-contents {
    display: flex;
    flex-direction: row;
    padding: 0px 0px 32px 38px;
    color: #2e2c2c;
    font-family: Poppins;
    font-size: 21px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    gap: 22.27px;
  }
  .rating-contents .rating5 {
    font-size: 13px;
  }
`;

export const ClassCard = ({
  avatar,
  thumbnail,
  tutorName,
  courseName,
  rating,
  onClick,
}) => {
  return (
    <CardStyled onClick={onClick}>
      <div className="thumb-container">
        <img src={thumbnail} alt="" />
      </div>
      <div className="tutor-inf">
        <img src={avatar} alt="" />
        <p className="tutor-name">{tutorName}</p>
      </div>
      <div className="course-name">{courseName}</div>
      <div className="rating-contents">
        <p>
          {rating}
          <span className="rating5">/5.0</span>
        </p>
        <StarRatings
          rating={rating}
          starDimension="15px"
          starSpacing="5px"
          starRatedColor="#FED66F"
        />
      </div>
    </CardStyled>
  );
};
