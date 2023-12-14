import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import CircleButton from "./CircleButton";

import HomeIcon from "assets/icons/home.svg";
import PersonIcon from "assets/icons/person.svg";

const Container = styled.nav`
  ${({ theme: { colors } }) => `
    background: ${colors.black};
    border: 2px solid ${colors.white30};
  `}
  width: max-content;
  border-radius: 3.75rem;
  padding: 12px 6px;
  margin-left: 16px;
`;

const Icon = styled.img`
  width: 40px;
`;

const Navbar = () => {
  const navigate = useNavigate();

  const NAVBAR_ITEMS = [
    { icon: HomeIcon, alt: "home icon", action: () => navigate("/") },
    {
      icon: PersonIcon,
      alt: "person icon",
      action: () => navigate("/champion"),
    },
  ];

  return (
    <Container>
      {NAVBAR_ITEMS.map((item, idx) => {
        return (
          <CircleButton key={idx} hoverColor="white20" onClick={item.action}>
            <Icon src={item.icon} alt={item.alt} />
          </CircleButton>
        );
      })}
    </Container>
  );
};

export default Navbar;
