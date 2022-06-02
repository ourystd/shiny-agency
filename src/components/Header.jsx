import { Link } from "react-router-dom";

const Header = () => {
  const navStyle = {
    margin: 10,
  };

  return (
    <nav>
      <Link style={navStyle} to="/">
        Accueil
      </Link>
      <Link style={navStyle} to="/survey/1">
        Questionnaire
      </Link>
      <Link style={navStyle} to="/freelances">
        Freelances
      </Link>
    </nav>
  );
};

export default Header;
