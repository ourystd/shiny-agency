import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const MainWrapper = styled.div`
  max-width: 750px;
  margin: 100px auto;
  text-align: center;
  color: #2f2e41;
`;

const QuestionNumber = styled.h2`
  text-decoration: underline #5843e4;
`;

const QuestionText = styled.p`
  margin: 60px auto;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
`;

const AnswersList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const Answer = styled.button`
  min-width: 200px;
  min-height: 80px;
  background-color: #f9f9fc;
  border-radius: 30px;
  font-size: 25px;
  border: 1px solid transparent;
  padding: 15px 30px;
  margin-bottom: 60px;
  transition: border-color 0.35s;

  &:hover {
    border-color: #5843e4;
  }
`;

const QuestionsNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  font-size: 18px;
  font-weight: 400;

  a:not(:hover) {
    color: #2f2e41;
  }
`;

const SpaceFiller = () => <span style={{ width: 100 }} />;

const Survey = () => {
  const questionNumber = parseInt(useParams().questionNumber, 10);

  const prevQuestion = questionNumber - 1;
  const nextQuestion = questionNumber + 1;

  const navStyle = {
    margin: 10,
  };

  return (
    <MainWrapper>
      <QuestionNumber>Question {questionNumber}</QuestionNumber>
      <QuestionText>
        Votre application doit-elle impérativement apparaître en premier dans
        les résultats de recherche ?
      </QuestionText>
      <AnswersList>
        <Answer>Oui</Answer>
        <Answer>Non</Answer>
      </AnswersList>
      <QuestionsNavigation>
        {!!prevQuestion ? (
          <Link style={navStyle} to={`/survey/${prevQuestion}`}>
            Précédent
          </Link>
        ) : (
          <SpaceFiller />
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
      </QuestionsNavigation>
    </MainWrapper>
  );
};

export default Survey;
