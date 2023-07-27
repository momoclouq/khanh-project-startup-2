import styled from "styled-components";
import Avatar from "../../../assets/icons/dashboardicon/Avt-Icon.svg";
import { ProfileChart } from "../DashboardProfileChart";
import { CourseScheduleCard } from "../DashboardCard";
const PageStyled = styled.div`
  width: 25%;
  //min-width: 423px;
  padding: 54px 34px 0px 32px;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  .head {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 34px;
  }
  .avt-name {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 139px;
      height: 139px;
      margin-bottom: 22px;
    }
    .name,
    .name-tag {
      font-family: Poppins;
      font-style: normal;
      line-height: normal;
    }
    .name {
      color: #2e2c2c;
      font-size: 20px;
      font-weight: 500;
    }
    .name-tag {
      color: #8c8888;
      font-size: 15px;
      font-weight: 400;
    }
  }
  .statistics-summary {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    text-align: center;
    border-radius: 14px;
    background: #ededed;
    padding: 8px 37px 11px 35px;
    margin-top: 21px;
    .rank {
      .text-style,
      .number-style {
        font-family: Poppins;
        font-style: normal;
        line-height: normal;
      }
      .text-style {
        color: #8c8888;
        font-size: 8px;
        font-weight: 500;
      }
      .number-style {
        color: #2e2c2c;
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
  .statistics-chart {
    margin-top: 25px;
    width: 100%;
    height: 400px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .statistics-chart-head {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 4px 7px 0px 7px;
      .statstics-text {
        color: #2e2c2c;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
      .choice {
        color: #3b3939;
        font-family: Poppins;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
  .schedule {
    margin-top: 63px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 21px;
    .schedule-head {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .text,
      .all {
        font-family: Poppins;
        font-style: normal;
        line-height: normal;
      }
      .all {
        color: #c6c2c2;
        font-size: 13px;
        font-weight: 400;
      }
      .text {
        color: #2e2c2c;
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
`;
export const ProfileColumn = () => {
  return (
    <PageStyled>
      <div className="head">
        <h3>Profile</h3>
        <span>Edit</span>
      </div>
      <div className="avt-name">
        <img src={Avatar} alt="" />
        <div className="name">Abiola Savage</div>
        <div className="name-tag">@abbeysvee</div>
      </div>
      <div className="statistics-summary">
        <div className="rank">
          <div className="text-style">Rank</div>
          <div className="number-style">137</div>
        </div>
        <div className="rank">
          <div className="text-style">Average Act.</div>
          <div className="number-style">3.2 Hours</div>
        </div>
        <div className="rank">
          <div className="text-style">Courses</div>
          <div className="number-style"></div>
        </div>
      </div>
      <div className="statistics-chart">
        <div className="statistics-chart-head">
          <span className="statstics-text">Statistics</span>
          <span className="choice">Monthly</span>
        </div>
        <ProfileChart />
      </div>
      <div className="schedule">
        <div className="schedule-head">
          <span className="text">Scheduled</span>
          <span className="all">All</span>
        </div>
        <CourseScheduleCard
          courseName="Software Architecture"
          time="Aug 2, 2022 from 8am - 10am"
        />
        <CourseScheduleCard
          courseName="Software Architecture"
          time="Aug 2, 2022 from 8am - 10am"
        />
      </div>
    </PageStyled>
  );
};
