import { useParams } from "react-router-dom";

const SurveyQuestion = () => {
  const { questionNumber } = useParams();

  return (
    <div>
      <h1>Question #{questionNumber}</h1>
    </div>
  );
};

export default SurveyQuestion;
