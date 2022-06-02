import { Link } from "react-router-dom";

const Survey = () => {
  return (
    <div>
      <h1>Questionnaire 🧮</h1>

      <p>
        <Link to="/survey/1">Allez à la question 1</Link>
      </p>
    </div>
  );
};

export default Survey;
