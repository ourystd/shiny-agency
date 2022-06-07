import styled from "styled-components";
import pageNotFoundImg from "../assets/page_not_found.svg";

const MainWrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 50px;
  padding: 50px;
  padding-bottom: 100px;
  text-align: center;

  background-color: #f9f9fc;
`;

const ImageWrapper = styled.div`
  margin: 50px auto;

  & > img {
    max-width: 100%;
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
`;

const Error404 = () => {
  return (
    <MainWrapper>
      <h1>Oups...</h1>
      <ImageWrapper>
        <img src={pageNotFoundImg} alt="No freelance need" />
      </ImageWrapper>
      <Paragraph>Il semblerait qu’il y ait un problème</Paragraph>
    </MainWrapper>
  );
};

export default Error404;
