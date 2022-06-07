import styled from "styled-components";
import homeMainImg from "../assets/home-resume-drawing.svg";
import { Link } from "react-router-dom";

const MainWrapper = styled.div`
  width: 100%;
  flex: 1;
  margin-top: 100px;
  padding: 30px 70px;
  padding-bottom: 100px;

  background: #f9f9fc url(${homeMainImg}) no-repeat center;
  background-position-x: 90%;
`;

const FLexWrapper = styled.div`
  margin: 70px auto;
  display: flex;
  align-items: center;

  p {
    font-size: 50px;
    line-height: 80.25px;
    color: #2f2e41;
    max-width: 550px;
  }
`;

const SurveyCTA = styled(Link)`
  background-color: #5843e4;
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 12px 35px;
  font-size: 20px;
  font-weight: 700;
  border: 2px solid #2f2e41;
  text-decoration: none;
  transition: 0.35s;

  &:hover {
    background-color: #2f2e41;
    box-shadow: 2px 2px 15px 2px #e2e3e9;
  }
`;

function Home() {
  return (
    <MainWrapper>
      <FLexWrapper>
        <div>
          <p>
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </p>
          <SurveyCTA to="/survey/1">Faire le test</SurveyCTA>
        </div>
      </FLexWrapper>
    </MainWrapper>
  );
}

export default Home;
