import React from "react";
import styled from "styled-components";
import Button from "./components/Button";

const MainWrapper = styled.section`
  widht: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${({ page }) => {
    if (page === "first") return "flex-end";
    else if (page === "middle") return "space-between";
    else return "flex-start";
  }};
`;

const Link = styled.a.attrs((props) => ({
  target: "_blank",
}))`
  color: violet;
  font-size: 1.5rem;
`;

const App = () => {
  return (
    <MainWrapper>
      <Button primary>Primary Button</Button>
      <Button>Button</Button>
      <PaginationWrapper page="middle">
        <Button>Page 2</Button>
        <Button>Page 3</Button>
      </PaginationWrapper>
      <Link href="https://www.google.com" target="_blank">
        One Link
      </Link>
      <Link href="https://www.google.com" target="_blank">
        Another Link
      </Link>
    </MainWrapper>
  );
};
export default App;
