import styled from "styled-components";
import { ReactComponent as CheckIcon } from "../../../assets/icons/check-circle-icon.svg";
const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 39.66px;
  justify-content: flex-start;
  width: 50%;
  .text {
    color: #96989b;
    font-size: 26px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: 214%;
    display: flex;
    width: 85%;
    flex-direction: column;
    flex-shrink: 0;
    text-align: justify;
  }
  @media screen and (max-width: 1315px){
    width: 100%;
    .text{
        width: 92%;
    }
  }
`;
export const WhatYouWouldLearnCard = () => {
  return (
    <StyledDiv>
      <CheckIcon />
      <div className="text">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore{" "}
      </div>
    </StyledDiv>
  );
};
