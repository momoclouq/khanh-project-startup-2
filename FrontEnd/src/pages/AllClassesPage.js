import { AllClassesContents } from "components/Dashboard/AllClassesContents";
import styled from "styled-components";

const PageStyled = styled.div`
  margin: 52px 70px 0px 68px;
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
const AllClasses = () => {
  return (
    <PageStyled>
      <h1>All Classes</h1>
      <AllClassesContents />
    </PageStyled>
  );
};
export default AllClasses;
