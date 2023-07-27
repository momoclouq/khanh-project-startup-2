import { useState } from "react";
import TimePicker from "react-time-picker";
import styled from "styled-components";

import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const TimeSelectorStyled = styled.div`
  width: 20%;
  .react-time-picker {
    width: 100%;
    height: 52px;
    border-radius: 10px;
    background: #fff;
  }
  .react-time-picker__wrapper {
    border-radius: 10px;
  }
  .react-time-picker__inputGroup {
    justify-content: center;
  }
  .react-time-picker__clear-button.react-time-picker__button {
    display: none;
  }
  @media screen and (max-width: 1212px) {
    width: 100%;
  }
`;
export const TimeSelector = () => {
  const [value, onChange] = useState("10:00");

  return (
    <TimeSelectorStyled>
      <TimePicker onChange={onChange} value={value} />
    </TimeSelectorStyled>
  );
};
