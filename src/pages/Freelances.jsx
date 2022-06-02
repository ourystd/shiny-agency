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
];

const Freelances = () => {
  console.log("Freelances", freelanceProfiles);

  return (
    <div>
      <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
      <div
        className="freelance-profiles"
        style={{ display: "flex", padding: 15 }}
      >
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
            picture={profile.picture}
          />
        ))}
      </div>
    </div>
  );
};

export default Freelances;
