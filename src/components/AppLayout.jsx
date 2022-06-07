import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

const MainLayoutWrapper = styled.div`
  padding: 2rem 3rem;
  padding-bottom: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MainContent = styled.main`
  flex: 1;
  width: 100%;
`;

const AppLayout = () => {
  return (
    <MainLayoutWrapper>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
    </MainLayoutWrapper>
  );
};

export default AppLayout;
