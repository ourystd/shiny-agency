import styled from "styled-components";
import noFreelanceImg from "../assets/no-experts-needed.svg";

const MainWrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 50px;
  padding: 50px;
  text-align: center;

  background-color: #f9f9fc;
`;

const ImageWrapper = styled.div`
  margin: 50px auto;

  & > img {
    max-width: 100%;
  }
`;

const NoFreelanceNeeded = () => {
  return (
    <MainWrapper>
      <h1>Dommage...</h1>
      <ImageWrapper>
        <img src={noFreelanceImg} alt="No freelance need" />
      </ImageWrapper>
      <p>Il semblerait que vous n’ayez besoin d’aucune compétence</p>
    </MainWrapper>
  );
};

export default NoFreelanceNeeded;
