import styled from "styled-components";
import Search from "./Search";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(51, 82, 146);
  box-sizing: border-box;
  height: 8.2rem;
  position: fixed;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 6em;
  margin-left: 15px;
  letter-spacing: 2px;
  color: white;
`;

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <Container>
        <Title href="/">{title}</Title>
        <Search />
      </Container>
    </StyledHeader>
  );
};

export default Header;
