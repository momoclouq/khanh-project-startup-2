import styled from "styled-components";

const ButtonStyled = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) =>
    props.boderColor ? `1px solid ${props.boderColor}` : "none"};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.fontSize};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  div {
    padding: 24px 27px;
  }
`;

export const DButton = ({
  width,
  height,
  textColor,
  bgColor,
  boderColor,
  borderRadius,
  fontSize,
  onClick,
  disabled,
  children,
}) => {
  return (
    <ButtonStyled
      width={width}
      height={height}
      textColor={textColor}
      bgColor={bgColor}
      borderRadius={borderRadius}
      fontSize={fontSize}
      boderColor={boderColor}
      onClick={onClick}
      disabled={disabled}
    >
      <div>{children}</div>
    </ButtonStyled>
  );
};

DButton.defaultProps = {
  bgColor: "transparent",
  textColor: "black",
  borderRadius: "49px",
  height: "84px",
  fontSize: "24px",
};
