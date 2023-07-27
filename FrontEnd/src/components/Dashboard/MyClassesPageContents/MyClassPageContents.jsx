import styled from "styled-components";
import { DropdownSelector } from "../Selector";
import { CalenderSelector } from "../Selector";
import { Button } from "components/Button/Button";
import { MyClassesTable } from "../Table";
import fakeData from "../../../MOCK_DATA.json";

const MyClassPageContentsStyled = styled.div`
  height: 1273px;
  padding-top: 47px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
    .filter-group {
      flex-direction: column;
      gap: 27px;
    }
    .view-calendar {
      width: 100%;
      text-align: left;
    }
  }
`;

export const MyClassPageContents = () => {
  return (
    <MyClassPageContentsStyled>
      <div className="filter-group">
        <DropdownSelector newPlaceholder="Select Class" />
        <DropdownSelector newPlaceholder="Select Subject" />
        <CalenderSelector />
        <Button
          width="165px"
          height="52px"
          borderRadius="37px"
          bgColor="#0C4CA3"
        >
          Filter
        </Button>
      </div>
      {fakeData && <MyClassesTable inputData={fakeData} />}
    </MyClassPageContentsStyled>
  );
};
