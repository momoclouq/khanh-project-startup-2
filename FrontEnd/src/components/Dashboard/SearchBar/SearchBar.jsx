import styled from "styled-components";
import { ReactComponent as SearchLogo } from "../../../assets/icons/dashboardicon/search-icon.svg";
const SearchBarStyled = styled.div`
  width: 18%;
  min-width: 163px;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 117px;
  background: #fafbfe;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);
  padding: 0px 16px 0px 18px;
  gap: 19.23px;
  .input-field {
    width: 75%;
    border: none;
    border-color: transparent;
    outline: none;
  }
  .input-field::placeholder {
    color: rgba(46, 44, 44, 0.4);
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .search-logo {
    width: 25%;
  }
`;
export const SearchBar = ({ setPlaceholder }) => {
  return (
    <SearchBarStyled setPlaceholder={setPlaceholder}>
      <SearchLogo className="search-logo" />
      <input className="input-field" type="" placeholder={setPlaceholder} />
    </SearchBarStyled>
  );
};
