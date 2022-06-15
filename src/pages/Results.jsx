import { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSurvey } from "../utils/context";
import { formatJobList, formatQueryParams } from "../utils/format";
import { useFetch } from "../utils/hooks";
import { Loader } from "../utils/style/Atom";

const MainWrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  padding: 100px 70px;

  background-color: ${({ theme }) => theme.mainWrapper};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 720px;
  margin: 0 auto;
  color: ${({ theme }) => theme.highContrastText};
`;

const NeededProfiles = styled.h1`
  max-width: 500px;
  font-size: 30px;
  margin-bottom: 60px;
  text-align: center;

  & span {
    color: ${({ theme }) => theme.blueToWhite};
  }
`;

const LinkToProfiles = styled(Link)`
  background-color: #5843e4;
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 12px 35px;
  font-size: 20px;
  font-weight: 700;
  border: 2px solid #2f2e41;
  text-decoration: none;
  margin-bottom: 60px;
  transition: 0.35s;

  &:hover {
    background-color: #2f2e41;
    box-shadow: 2px 2px 15px 2px #e2e3e9;
  }
`;

const ProfilesDetails = styled.div`
  p,
  h2 {
    font-size: 20px;
    font-weight: 300;
  }

  p {
    color: ${({ theme }) => theme.rolesDesc};
  }
`;

const ProfileTitle = styled.h2`
  color: ${({ theme }) => theme.blueToWhite};
  text-transform: capitalize;
`;

const Results = () => {
  const { answers } = useSurvey();
  const query = formatQueryParams(answers);
  const { data } = useFetch(`http://localhost:8000/results/?${query}`, []);
  const { resultsData: results } = data;

  return (
    <MainWrapper>
      <ContentWrapper>
        <NeededProfiles>
          Les compétences dont vous avez besoin :{" "}
          <span>
            {results?.map(({ title }, index) =>
              formatJobList(title, index, results.length)
            )}
          </span>
        </NeededProfiles>
        <LinkToProfiles to="/freelances">Découvrez nos profils</LinkToProfiles>

        <ProfilesDetails>
          {results?.map(({ title, description }) => (
            <Fragment key={title}>
              <ProfileTitle>{title}</ProfileTitle>
              <p>{description}</p>
            </Fragment>
          ))}
          {(!results || !results.length) && (
            <div>
              <Loader />
            </div>
          )}
        </ProfilesDetails>
      </ContentWrapper>
    </MainWrapper>
  );
};

export default Results;
