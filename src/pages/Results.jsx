import { Link } from "react-router-dom";
import styled from "styled-components";

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
`;

const Results = () => {
  return (
    <MainWrapper>
      <ContentWrapper>
        <NeededProfiles>
          Les compétences dont vous avez besoin :{" "}
          <span>UX Design, frontend, backend</span>
        </NeededProfiles>
        <LinkToProfiles to="/freelances">Découvrez nos profils</LinkToProfiles>

        <ProfilesDetails>
          <ProfileTitle>UX Design</ProfileTitle>
          <p>
            Le rôle de l’UX est de Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore lome.
          </p>
          <ProfileTitle>Frontend</ProfileTitle>
          <p>
            Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo vie.
          </p>
          <ProfileTitle>Backend</ProfileTitle>
          <p>
            Consequat duis aute irure dolor in reprehenderit. In voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </ProfilesDetails>
      </ContentWrapper>
    </MainWrapper>
  );
};

export default Results;
