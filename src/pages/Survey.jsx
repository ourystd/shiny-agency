import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { Loader } from "../utils/style/Atom";

const MainWrapper = styled.div`
  max-width: 750px;
  margin: 100px auto;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

const QuestionNumber = styled.h2`
  text-decoration: underline #5843e4;
`;

const QuestionText = styled.div`
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
  background-color: ${({ theme }) => theme.mainWrapper};
  border-radius: 30px;
  font-size: 25px;
  border: 1px solid transparent;
  padding: 15px 30px;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.text};
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

  a {
    margin: 10px;
  }

  a:not(:hover) {
    color: ${({ theme }) => theme.text};
  }
`;

const LoadingWrapper = styled.div`
  width: 100%;
  margin: 60px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpaceFiller = () => <span style={{ width: 100 }} />;

const Survey = () => {
  const questionNumber = parseInt(useParams().questionNumber, 10);
  const [questions, setQuestions] = useState(null);
  const prevQuestionNum = questionNumber - 1;
  const nextQuestionNum = questionNumber + 1;

  useEffect(() => {
    fetch(`http://localhost:8000/survey/`)
      .then((res) => res.json())
      .then(({ surveyData }) => setQuestions(surveyData))
      .catch((err) => console.log(err));
  }, [setQuestions]);

  const totalQuestions = questions ? Object.keys(questions).length : 0;

  return (
    <MainWrapper>
      <QuestionNumber>Question {questionNumber}</QuestionNumber>
      {questions && <QuestionText> {questions[questionNumber]}</QuestionText>}
      {!questions && (
        <LoadingWrapper>
          <Loader />
        </LoadingWrapper>
      )}
      <AnswersList>
        <Answer>Oui</Answer>
        <Answer>Non</Answer>
      </AnswersList>
      <QuestionsNavigation>
        {!!prevQuestionNum ? (
          <Link to={`/survey/${prevQuestionNum}`}>Précédent</Link>
        ) : (
          <SpaceFiller />
        )}
        {nextQuestionNum <= totalQuestions ? (
          <Link to={`/survey/${nextQuestionNum}`}>Suivant</Link>
        ) : (
          <Link to={`/results`}>Résultats</Link>
        )}
      </QuestionsNavigation>
    </MainWrapper>
  );
};

export default Survey;
