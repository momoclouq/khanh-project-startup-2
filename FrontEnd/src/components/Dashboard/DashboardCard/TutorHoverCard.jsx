import styled from "styled-components";
import StarRatings from "react-star-ratings";

const ContentsStyled = styled.div`
  width: 100%;
  height: 301px;
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 13px;
  padding: 21px 26px 21px 74px;
  margin-top: 10px;
  .head-text {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: Poppins;
    font-style: normal;
    line-height: normal;
    .student-reviews {
      color: #2e2c2c;
      font-size: 20px;
      font-weight: 600;
    }
    .visit-profile {
      color: #3473bc;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .rating .rate{
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
  }
  .rating .rate .rating-number {
    color: #2e2c2c;
    font-family: Poppins;
    font-style: normal;
    font-size: 13px;
    font-weight: 400;
    line-height: normal;
    span {
      font-size: 21px;
    }
  }
`;
export const TutorHoverCard = ({
  id,
  bgColor,
  rating,
  onMouseEnter,
  onMouseLeave,
  children,
}) => {
  return (
    <ContentsStyled
      bgColor={bgColor}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="head-text">
        <span className="student-reviews">Student Reviews</span>
        <span className="visit-profile">Visit profile</span>
      </div>
      <div className="rating">
        <div className="rate">
          <div className="rating-number">
            <span>{rating}</span>/5.0
          </div>
          <StarRatings
            rating={rating}
            starDimension="19px"
            starSpacing="5px"
            starRatedColor="#FED66F"
          />
        </div>
      </div>
      {children}
    </ContentsStyled>
  );
};
