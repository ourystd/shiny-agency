import { Link, useParams } from "react-router-dom";

const Survey = () => {
  const questionNumber = parseInt(useParams().questionNumber, 10);

  const prevQuestion = questionNumber - 1;
  const nextQuestion = questionNumber + 1;

  const navStyle = {
    margin: 10,
  };

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question #{questionNumber}</h2>
      <p>
        {!!prevQuestion && (
          <Link style={navStyle} to={`/survey/${prevQuestion}`}>
            Précédent
          </Link>
        )}
        {nextQuestion <= 10 ? (
          <Link style={navStyle} to={`/survey/${nextQuestion}`}>
            Suivant
          </Link>
        ) : (
          <Link style={navStyle} to={`/results`}>
            Résultats
          </Link>
        )}
      </p>
    </div>
  );
};

export default Survey;
