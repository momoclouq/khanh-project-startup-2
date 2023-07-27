import styled from "styled-components";
import React, { useState } from "react";
import { DropdownSelector } from "../Selector";
import { CalenderSelector } from "../Selector";
import { Button } from "components/Button/Button";
import fakeData from "../../../LIST_CLASS_MOCK_DATA.json";
import { ClassCard } from "../DashboardCard";
import { PopupDetails } from "./PopupDetails";

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
    margin-bottom: 140px;
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
  .class-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 5px;
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

export const AllClassesContents = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedClass, setSelectedClass] = useState([]);
  const handleCategoryChange = (event) => {
    const selectedCategories = event.target.value;
    setSelectedCategories(selectedCategories);
  };

  const handleClassChange = (event) => {
    const selectedClass = event.target.value;
    setSelectedClass(selectedClass);
  };
  return (
    <MyClassPageContentsStyled>
      <div className="filter-group">
        <DropdownSelector
          newPlaceholder="Select Category"
          onChange={handleCategoryChange}
        />
        <DropdownSelector
          newPlaceholder="Select Class"
          onChange={handleClassChange}
        />
        <Button
          width="165px"
          height="52px"
          borderRadius="37px"
          bgColor="#0C4CA3"
        >
          Filter
        </Button>
      </div>
      <div className="class-wrapper">
        {fakeData.map((course) => (
          <PopupDetails
            avatar={course.avatar}
            thumbnail={course.thumbnail}
            tutorName={course.tutorName}
            courseName={course.courseName}
            rating={course.rating}
            detail={course.detail}
            totalHours={course.totalHours}
          />
        ))}
      </div>
    </MyClassPageContentsStyled>
  );
};
