import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useStore } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";
import { fetchOrUpdateFreelances } from "../features/freelances";
// import { useFetch } from "../utils/hooks";
import { selectFreelances } from "../utils/selectors";
import { Loader } from "../utils/style/Atom";

const PageWrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 80px;
`;
const PageTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 50px;
  font-size: 30px;
  color: ${({ theme }) => theme.text};
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
  // const { data, error, isLoading } = useFetch(
  //   `http://localhost:8000/freelances/`,
  //   []
  // );
  const freelances = useSelector(selectFreelances);
  const { freelancersList } = freelances.data || {};
  const isError = Boolean(freelances.error);
  const isLoading = ["idle", "pending"].includes(freelances.status);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrUpdateFreelances);
  }, [dispatch]);

  return (
    <PageWrapper>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubTitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubTitle>
      {isError && (
        <div
          style={{
            margin: "60px auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "red",
          }}
        >
          <p>Une erreur est sur venue lors de la récupération des données.</p>
        </div>
      )}
      {isLoading && !freelancersList?.length && (
        <div
          style={{
            margin: "60px auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Loader />
        </div>
      )}
      <CardsContainer>
        {freelancersList?.map((profile, index) => (
          <Link
            key={`${profile.name}-${index}`}
            to={`/freelances/${profile.id}`}
            style={{ textDecoration: "none" }}
          >
            <Card
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          </Link>
        ))}
      </CardsContainer>
    </PageWrapper>
  );
};

export default Freelances;
