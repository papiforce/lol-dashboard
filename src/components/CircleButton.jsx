import styled from "styled-components";

const ButtonStyled = styled.button`
  ${({ theme: { colors }, $color, $hoverColor }) => `
    background: ${$color ? colors[$color] : "transparent"};

    &:hover {
      background: ${colors[$hoverColor]};
    }

    &:active {
      transform: scale(0.93);
    }
  `}
  overflow: hidden;
  border-radius: 9999px;
  padding: 8px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 100ms cubic-bezier(0.64, 0.04, 0.35, 1);
  transform: scale(1);
  cursor: pointer;
  color: white !important;

  :focus {
    outline: none;
  }
`;

const CircleButton = ({
  children,
  style,
  color,
  hoverColor,
  onClick,
  isLoading,
  ...props
}) => {
  return (
    <ButtonStyled
      $color={color}
      $hoverColor={hoverColor}
      style={style}
      type="button"
      onClick={() => {
        if (onClick && !isLoading) onClick();
      }}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};

export default CircleButton;
