import { createContext, useContext, useState } from "react";

const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
  const [answers, setAnswers] = useState(null);

  const persitAnswer = (newAnswer) =>
    setAnswers((currentAnswers) => ({
      ...currentAnswers,
      ...newAnswer,
    }));

  return (
    <SurveyContext.Provider value={{ answers, persitAnswer }}>
      {children}
    </SurveyContext.Provider>
  );
};

export const useSurvey = () => {
  const context = useContext(SurveyContext);

  if (!context) {
    throw new Error("useSurvey must be used within a SurveyProvider");
  }

  return context;
};