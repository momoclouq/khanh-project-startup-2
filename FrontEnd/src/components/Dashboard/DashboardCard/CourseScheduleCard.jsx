import styled from "styled-components";
import { ReactComponent as TickIcon } from "../../../assets/icons/dashboardicon/Schedule_Tick_Icon.svg";

const CardStyled = styled.div`
  width: 100%;
  height: 78px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
  padding: 19px 13px;
  gap: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  .contents {
    display: flex;
    flex-direction: column;
    gap: 4px;
    .course-name,
    .time {
      font-family: Poppins;
      font-style: normal;
      line-height: normal;
      font-weight: 500;
    }
    .course-name {
      color: #2e2c2c;
      font-size: 14px;
    }
    .time {
      color: #8c8888;
      font-size: 10px;
    }
  }
`;
export const CourseScheduleCard = ({ courseName, time }) => {
  return (
    <CardStyled>
      <TickIcon />
      <div className="contents">
        <div className="course-name">{courseName}</div>
        <div className="time">{time}</div>
      </div>
    </CardStyled>
  );
};
