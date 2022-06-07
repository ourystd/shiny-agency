import { NavLink } from "react-router-dom";
import styled from "styled-components";
import colors from "../utils/style/color";

const StyledLink = styled(NavLink)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: #5843e4;
  }

  &.active {
    color: #5843e4;
  }

  ${(props) =>
    props.$isFullLink &&
    `color: #fff; border: 1px solid #8186a0; background-color: ${colors.primary};`}
`;

const Header = () => {
  return (
    <nav>
      <StyledLink to="/" $isFullLink>
        Accueil
      </StyledLink>
      <StyledLink to="/survey/1">Questionnaire</StyledLink>
      <StyledLink to="/freelances">Freelances</StyledLink>
    </nav>
  );
};

export default Header;
