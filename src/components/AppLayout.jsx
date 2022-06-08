import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import { GlobalStyle } from "./theme/global";
import { darkTheme, lightTheme } from "./theme/modes";
import { FiSun, FiMoon } from "react-icons/fi";

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

const ThemeToggler = styled.button`
  display: flex;
  position: fixed;
  top: 50%;
  transform: translateY(50%);
  left: 0;
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.toggleIcon};
  background-color: transparent;
  transition: all ${(props) => props.theme.transitionTime};
  border: none;
  outline: none;
  cursor: pointer;
`;

const AppLayout = () => {
  const [theme, setTheme] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const icon = theme === "light" ? <FiMoon size={26} /> : <FiSun size={26} />;

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <ThemeToggler onClick={toggleTheme}>{icon}</ThemeToggler>
      <MainLayoutWrapper>
        <Header themeMode={theme} />
        <MainContent>
          <Outlet />
        </MainContent>
      </MainLayoutWrapper>
    </ThemeProvider>
  );
};

export default AppLayout;
