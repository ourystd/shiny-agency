import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import colors from "../utils/style/color";
import lightLogo from "../assets/shiny-logo-light.png";
import darkLogo from "../assets/shiny-logo-dark.png";

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CompanyLogo = styled(Link)`
  height: 60px;
`;
const LogoImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-left: -7px;
  transition: 0.35s;
`;
const NavItems = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  li:not(:last-child) {
    margin-right: 15px;
  }
`;
const StyledLink = styled(NavLink)`
  padding: 15px;
  color: ${({ theme }) => theme.navLink};
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  transition: 0.35s;

  &.active,
  &:hover {
    color: #5843e4;

    ${(props) =>
      props.$isFullLink &&
      `color: #fff;
      box-shadow: 0px 0px 10px #e2e3e9;
    `}
  }

  &:focus {
    outline: 0;
  }

  ${(props) =>
    props.$isFullLink &&
    `color: #fff;
    border-radius: 30px;
    padding: 12px 25px;
    background-color: ${colors.primary};
    `}
`;

const Header = ({ themeMode }) => {
  const logo = themeMode === "light" ? lightLogo : darkLogo;

  return (
    <HeaderWrapper>
      <CompanyLogo to="/">
        <LogoImg src={logo} alt="Shiny Agency" />
      </CompanyLogo>
      <nav>
        <NavItems>
          <li>
            <StyledLink to="/">Accueil</StyledLink>
          </li>
          <li>
            <StyledLink to="/freelances">Profils</StyledLink>
          </li>
          <li>
            <StyledLink to="/survey/1" $isFullLink>
              Faire le test
            </StyledLink>
          </li>
        </NavItems>
      </nav>
    </HeaderWrapper>
  );
};

export default Header;
