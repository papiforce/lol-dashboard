import { useEffect } from "react";
import styled from "styled-components";

import Navbar from "components/Navbar";

const Container = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  min-height: 100dvh;
`;

const Wrapper = styled.main`
  height: 100dvh;
  width: 100%;
`;

const Layout = ({
  title = "LOL Dashboard",
  description = "Site permettant de voir les statistiques des champions du jeu League of Legends",
  children,
}) => {
  useEffect(() => {
    document.title = title;
    document.getElementsByTagName("META")[3].content = description;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Navbar />
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default Layout;
