import { SessionsContents } from "components/Dashboard/SessionsContents";
import styled from "styled-components";

const SessionsPageStyled = styled.div`
  margin: 52px 99px 0px 68px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(62px);
  h1 {
    color: #2e2c2c;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-bottom: 48px;
    box-shadow: 0 1px 0 0 #edebeb;
  }
`;
const SessionsPage = () => {
  return (
    <SessionsPageStyled>
      <h1>Sessions</h1>
      <SessionsContents />
    </SessionsPageStyled>
  );
};
export default SessionsPage;
