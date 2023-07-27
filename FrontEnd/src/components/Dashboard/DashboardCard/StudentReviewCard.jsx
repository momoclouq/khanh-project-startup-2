import styled from "styled-components";
import ratingIcon from "../../../assets/icons/dashboardicon/rating-icon.svg";
const PageStyled = styled.div`
  width: 438px;
  height: 166px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  padding: 7px 17px 9px 28px;
  box-shadow:
    0px 4px 10px 0px rgba(0, 0, 0, 0.05),
    0px -4px 10px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .review-date,
  .review-details,
  .full-name,
  .student-type,
  .student-rating {
    font-family: Poppins;
    font-size: normal;
    line-height: normal;
  }
  .icon {
    color: rgba(140, 136, 136, 0.3);
    font-family: Itim;
    font-size: 135px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .review-date {
    text-align: right;
    color: #c6c2c2;
    font-size: 15px;
    font-weight: 400;
  }
  .review-details {
    display: flex;
    flex-direction: row;
    height: 50px;
    .text {
      max-width: 326px;
      max-height: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-wrap: break-word;
      color: #2e2c2c;
      font-size: 13px;
      font-weight: 400;
    }
  }
  .review-person {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 34px;
    .name-avt {
      display: flex;
      flex-direction: row;
      gap: 31px;
      .name-tag .full-name {
        color: #2e2c2c;
        font-size: 16px;
        font-weight: 600;
      }
      .name-tag .student-type {
        font-family: Poppins;
        font-size: 13px;
        font-weight: 400;
      }
    }
  }
`;
export const StudentReviewCard = ({
  rating,
  avatar,
  studentName,
  studentType,
  reviewsContent,
  reviewsDate,
}) => {
  return (
    <PageStyled>
      <div className="review-date">{reviewsDate}</div>
      <div className="review-details">
        <div className="text">{reviewsContent}</div>
        <div className="icon">’’</div>
      </div>
      <div className="review-person">
        <div className="name-avt">
          <img src={avatar} alt="" />
          <div className="name-tag">
            <div className="full-name">{studentName}</div>
            <div className="student-type">{studentType}</div>
          </div>
        </div>

        <div className="student-rating">
          <img src={ratingIcon} alt="" />
          {rating}
        </div>
      </div>
    </PageStyled>
  );
};
