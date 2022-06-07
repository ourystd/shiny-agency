import styled from "styled-components";
import DefaultPicture from "../assets/profile.png";
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
    <div>
      <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
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
    </div>
  );
};

export default Freelances;
