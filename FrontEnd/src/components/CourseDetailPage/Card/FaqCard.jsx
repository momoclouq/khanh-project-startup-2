import styled from "styled-components";
import { ReactComponent as ArrowDownIcon } from "../../../assets/icons/Arrow-point-down-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../../assets/icons/Arrow-point-right-Icon.svg";
import { useState } from "react";

const StyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 86%;
  border-radius: 25px;
  background: #ffffff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
  margin-left: 84px;
  .top {
    display: flex;
    flex-direction: row;
    gap: 22.3px;
    padding: 25px 40px;
    align-items: center;
  }
  .question {
    color: #2e2c2c;
    font-size: 28px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .answer {
    height: 126px;
    color: #7d7c7c;
    font-size: 28px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 48px;
    padding: 0px 40px 52px 94px;
  }
`;
export const FaqCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDown = () => setIsOpen(!isOpen);
  return (
    <StyleDiv question={question} answer={answer}>
      <div className="top">
        {isOpen && <ArrowDownIcon onClick={toggleDropDown} cursor="pointer" />}
        {!isOpen && (
          <ArrowRightIcon onClick={toggleDropDown} cursor="pointer" />
        )}

        <div className="question">{question} </div>
      </div>
      {isOpen && <div className="answer">{answer}</div>}
    </StyleDiv>
  );
};
