import { configureStore } from "@reduxjs/toolkit";
import freelancesReducer from "../features/freelances";
import surveyReducer from "../features/survey";
import themeReducer from "../features/theme";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    freelances: freelancesReducer,
    survey: surveyReducer,
  },
});
