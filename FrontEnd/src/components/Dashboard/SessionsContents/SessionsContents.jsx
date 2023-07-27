import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { DropdownSelector } from "../Selector";
import { CalenderSelector } from "../Selector";
import { TimeSelector } from "../Selector/TimeSelector";
import { Button } from "components/Button/Button";
import { SessionsTable } from "../Table/SessionsTable";

const SessionsContentsStyled = styled.div`
  height: 1273px;
  padding-top: 47px;
  .Nav-group {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  h3 {
    color: #464444;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin: 91px 0px 13px 0px;
    min-width: 102px;
  }
  .filter-group {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .filter-button {
    width: 100%;
    display: flex;
    justify-content: end;
    margin-top: 27px;
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-bottom: 20px;
    box-shadow: 0 1px 0 0 #edebeb;
  }
  .view-calendar {
    width: 10%;
    height: 22px;
    margin-top: 22px;
    color: #0c4ca3;
    text-align: left;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  @media screen and (max-width: 1212px) {
    .filter-group{
      flex-direction: column;
      gap: 27px;
    }
    .view-calendar{
      width: 100%;
      text-align: left;
    }
  }
  @media screen and (max-width: 612px) {
    .filter-button{
      justify-content: center;
    }
  }
`;
const NavItemStyled = styled.div`
  color: #464444;
  text-align: center;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  .active {
    position: relative;
    color: #2e2c2c;
    font-size: 15px;
    font-weight: 600;
    /* border-bottom: 3px solid #0c4ca3;
    padding-bottom: 6px; */
  }
  .active::after {
    display: block;
    content: "";
    width: 100%;
    height: 3px;
    background: #0c4ca3;
    position: absolute;
    bottom: 1;
    left: 0;
  }
`;
const NavItems = ({ path, text }) => {
  return (
    <NavItemStyled>
      <NavLink to={path}>{text}</NavLink>
    </NavItemStyled>
  );
};
export const SessionsContents = () => {
  return (
    <SessionsContentsStyled>
      <div className="Nav-group">
        <NavItems text="Upcoming" />
        <NavItems text="Past" />
      </div>
      <h3>Filter</h3>
      <div className="filter-group">
        <DropdownSelector newPlaceholder="Select Class" />
        <DropdownSelector newPlaceholder="Select Subject" />
        <CalenderSelector />
        <TimeSelector />
      </div>
      <div className="filter-button">
        <Button
          width="165px"
          height="52px"
          borderRadius="37px"
          bgColor="#0C4CA3"
        >
          Filter
        </Button>
      </div>
      <div className="view-calendar">View Calendar</div>
      <SessionsTable />
    </SessionsContentsStyled>
  );
};
