import { useParams } from "react-router-dom";
import styled from "styled-components";
import { freelanceProfiles } from "../data/freelanceProfiles";

const NoProfileFound = () => (
  <p style={{ textAlign: "center", color: "#8186a0", margin: "100px auto" }}>
    Pas de profile trouvé
  </p>
);

const MainWrapper = styled.div`
  width: 100%;
  margin: 100px auto;
  padding: 100px 70px;

  background-color: #f9f9fc;
`;

const ProfileInfos = styled.div`
  display: flex;
  max-width: 700px;
  margin: 0 auto;

  & > div {
    flex: 1;
  }
`;
const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-right: 100px;
`;

const ProfileName = styled.h2`
  color: #2f2e41;
  font-size: 31px;
  margin: 0;
`;

const PrfileLocation = styled.span`
  color: #8186a0;
  font-size: 18px;
`;
const ProfileJob = styled.div`
  color: #2f2e41;
  font-size: 25px;
  margin-top: 20px;
`;
const TagsList = styled.div`
  display: flex;
  margin-top: 20px;
`;
const Tag = styled.span`
  margin: 10px;
  padding: 8px 16px;
  color: #2f2e41;
  border: 1px solid #2f2e41;
  border-radius: 8px;
  font-weight: 400;

  &:first-child {
    margin-left: 0;
  }
`;

const AvailableNow = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  &::before {
    content: "";
    display: inline-block;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: #57b894;
    margin-right: 10px;
  }
  &::after {
    content: "Disponible maintenant";
    font-weight: 500;
  }
`;

const ProfilePayRate = styled.div`
  color: #2f2e41;
  font-size: 31px;
  margin-top: 27px;
`;

const ProfileDetails = () => {
  const { profileId } = useParams();

  const profile = freelanceProfiles.find(
    (profile) => profile.id === parseInt(profileId)
  );

  console.log({ profile, bool: !profile });

  if (!profile) return <NoProfileFound />;

  return (
    profile && (
      <MainWrapper>
        <ProfileInfos>
          <ProfileImage src={profile.picture} alt={profile.name} />
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <ProfileName>{profile.name}</ProfileName>{" "}
              <PrfileLocation>Paris, France</PrfileLocation>
            </div>
            <ProfileJob>{profile.jobTitle}</ProfileJob>
            <TagsList>
              {["React", "NextJs", "TypeScript"].map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagsList>
            <AvailableNow />
            <ProfilePayRate>550 € / jour</ProfilePayRate>
          </div>
        </ProfileInfos>
      </MainWrapper>
    )
  );
};

export default ProfileDetails;
