import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  margin-top: 40px;
  padding: 20px 0;
  text-align: center;
  vertical-align: middle;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <small>
        &copy; Shiny {new Date().getFullYear()} - Tous droits reservés
      </small>
    </FooterWrapper>
  );
};

export default Footer;
