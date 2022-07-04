import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import { GlobalStyle } from "./theme/global";
import { darkTheme, lightTheme } from "./theme/modes";
import { FiSun, FiMoon } from "react-icons/fi";
// import { useLocalStorage } from "../utils/hooks";
import Footer from "./Footer";
import { selectTheme } from "../utils/selectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleThemeAction } from "../features/theme";
import { useEffect } from "react";

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
  // const [theme, setTheme] = useLocalStorage(
  //   "shiny::theme",
  //   window.matchMedia &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches
  //     ? "dark"
  //     : "light"
  // );

  const rTheme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    // setTheme(theme === "light" ? "dark" : "light")
    dispatch(toggleThemeAction());
  };

  useEffect(() => {
    // console.log({ rTheme });
  }, [rTheme]);

  console.log({ rTheme });

  const icon = rTheme === "light" ? <FiMoon size={26} /> : <FiSun size={26} />;

  return (
    <ThemeProvider theme={rTheme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <ThemeToggler onClick={toggleTheme}>{icon}</ThemeToggler>
      <MainLayoutWrapper>
        <Header themeMode={rTheme} />
        <MainContent>
          <Outlet />
        </MainContent>
        <Footer />
      </MainLayoutWrapper>
    </ThemeProvider>
  );
};

export default AppLayout;
