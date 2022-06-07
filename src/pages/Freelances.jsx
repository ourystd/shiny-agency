import styled from "styled-components";
import DefaultPicture from "../assets/default-avatar-img.png";
import Card from "../components/Card";

const freelanceProfiles = [
  {
    name: "Jane Doe",
    jobTitle: "Devops",
    picture: DefaultPicture,
  },
  {
    name: "John Doe",
    jobTitle: "Developpeur frontend",
    picture: DefaultPicture,
  },
  {
    name: "Jeanne Biche",
    jobTitle: "Développeuse Fullstack",
    picture: DefaultPicture,
  },
  {
    name: "Rick Motry",
    jobTitle: "Data Scientist",
    picture: DefaultPicture,
  },
];

const PageWrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 80px;
`;
const PageTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 50px;
  font-size: 30px;
  color: #2f2e41;
  text-align: center;
`;
const PageSubTitle = styled.h2`
  margin-top: 0;
  font-size: 20px;
  color: #8186a0;
  margin-bottom: 90px;
  text-align: center;
`;
const CardsContainer = styled.div`
  max-width: 800px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-gap: 3.75rem;
  margin: 0 auto;
  padding-bottom: 150px;
`;

const Freelances = () => {
  return (
    <PageWrapper>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubTitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubTitle>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
            picture={profile.picture}
          />
        ))}
      </CardsContainer>
    </PageWrapper>
  );
};

export default Freelances;
