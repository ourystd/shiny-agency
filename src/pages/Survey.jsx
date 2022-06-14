import { Link, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSurvey } from "../utils/context";
import { useFetch } from "../utils/hooks";
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
  const prevQuestionNum = questionNumber - 1;
  const nextQuestionNum = questionNumber + 1;
  const { persitAnswer } = useSurvey();
  const navigate = useNavigate();

  const { data } = useFetch(`http://localhost:8000/survey/`, []);
  const { surveyData: questions } = data;

  const totalQuestions = questions ? Object.keys(questions).length : 0;

  const registerAnswer = (answer) => {
    persitAnswer({ [questionNumber]: answer });
    if (nextQuestionNum <= totalQuestions)
      navigate(`/survey/${nextQuestionNum}`);
  };

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
        <Answer onClick={() => registerAnswer(true)}>Oui</Answer>
        <Answer onClick={() => registerAnswer(false)}>Non</Answer>
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
