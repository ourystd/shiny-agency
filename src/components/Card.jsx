import PropTypes from "prop-types";
import DefaultPicture from "../assets/profile.png";
import styled from "styled-components";
import colors from "../utils/style/color";

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 1.2rem;
  font-weight: bold;
  align-self: flex-start;
  margin-bottom: 37px;
`;

const CardImage = styled.img`
  height: 148px;
  width: 148px;
  border-radius: 50%;
  margin-bottom: 32px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 350px;
  max-height: 325px;
  padding-bottom: 20px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

const Card = ({ label, title, picture }) => {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <span>{title}</span>
    </CardWrapper>
  );
};

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
  picture: DefaultPicture,
};

export default Card;
