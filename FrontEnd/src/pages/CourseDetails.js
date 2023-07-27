import { AboutFAQ } from "components/CourseDetailPage/AboutFAQ";
import { CourseDetailsBanner } from "components/CourseDetailPage/Banner";
import styled from "styled-components";
import detailsPageBg from "../assets/images/detailsPageBg.svg";

const StyledDiv = styled.div`
  background: url(${detailsPageBg}) no-repeat right 0px center;
  background-attachment: fixed;
`;
const CourseDetail = () => {
  return (
    <StyledDiv>
      <CourseDetailsBanner />
      <AboutFAQ />
    </StyledDiv>
  );
};
export default CourseDetail;
