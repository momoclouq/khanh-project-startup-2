import Select from "react-dropdown-select";
import styled from "styled-components";

const DropdownSelectorStyled = styled.div`
  border-radius: 10px;
  background: #fff;
  width: 20%;
  @media screen and (max-width: 1212px) {
    width: 100%;
  }
`;
const colourStyles = {
  borderRadius: "10px",
  width: "100%",
  height: "52px",
};
export const DropdownSelector = ({ options, onChange, newPlaceholder }) => {
  return (
    <DropdownSelectorStyled>
      <Select
        multi
        options={options}
        onChange={onChange}
        dropdownPosition="auto"
        dropdownHeight="52px"
        placeholder={newPlaceholder}
        style={colourStyles}
      />
    </DropdownSelectorStyled>
  );
};
