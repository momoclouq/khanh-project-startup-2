import Popup from "reactjs-popup";
import styled from "styled-components";
import { ClassCard } from "../DashboardCard";
import "reactjs-popup/dist/index.css";
import { Button } from "components/Button/Button";

const PopupStyled = styled(Popup)`
  &-overlay {
    background: rgba(0, 0, 0, 0.4);
  }
  &-content {
    border-radius: 20px;
    .modal {
      font-size: 12px;
    }
    .modal > .header {
      width: 100%;
      border-bottom: 1px solid gray;
      font-size: 18px;
      text-align: center;
      padding: 5px;
    }
    .modal > .content {
      width: 100%;
      padding: 10px 5px;
      margin-top: 10px;
      display: flex;
      flex-direction: row;
    }
    .modal > .content > img {
      width: 375px;
      height: 233px;
      flex-shrink: 0;
    }
    .modal > .content > .detail-info {
      padding-left: 15px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: justify;
      justify-content: space-between;
    }
    .modal > .actions {
      width: 100%;
      padding: 10px 5px;
      margin: auto;
      text-align: center;
    }
    .modal > .close {
      cursor: pointer;
      position: absolute;
      display: block;
      padding: 2px 5px;
      line-height: 20px;
      right: -10px;
      top: -10px;
      font-size: 24px;
      background: #ffffff;
      border-radius: 18px;
      border: 1px solid #cfcece;
    }
  }
`;

export const PopupDetails = ({
  avatar,
  thumbnail,
  tutorName,
  courseName,
  rating,
  detail,
  totalHours,
}) => {
  return (
    <PopupStyled
      trigger={
        <ClassCard
          thumbnail={thumbnail}
          courseName={courseName}
          avatar={avatar}
          tutorName={tutorName}
          rating={rating}
        />
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> {courseName} </div>
          <div className="content">
            <img src={thumbnail} alt="" />
            <div className="detail-info">
              <div>By {tutorName}</div>
              <div>Total hours: {totalHours}</div>
              {detail}
              <Button
                width="165px"
                height="52px"
                bgColor="#0C4CA3"
                fontSize="20px"
              >
                Join Class
              </Button>
            </div>
          </div>
        </div>
      )}
    </PopupStyled>
  );
};
