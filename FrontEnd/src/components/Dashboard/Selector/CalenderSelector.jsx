import { useState } from "react";
import DatePicker from "react-date-picker";
import "react-calendar/dist/Calendar.css";

import "react-date-picker/dist/DatePicker.css";
import styled from "styled-components";

const CalenderSelectorStyled = styled.div`
  width: 20%;
  .react-date-picker {
    width: 100%;
  }
  .react-date-picker__wrapper {
    width: 100%;
    height: 52px;
    border-radius: 10px;
    background-color: #fff;
  }
  .react-date-picker__clear-button.react-date-picker__button{
    display: none;
  }
  @media screen and (max-width: 1212px) {
    width: 100%;
  }
`;
export const CalenderSelector = () => {
  const [value, onChange] = useState(new Date());
  return (
    <CalenderSelectorStyled>
      <DatePicker onChange={onChange} value={value} />
    </CalenderSelectorStyled>
  );
};
