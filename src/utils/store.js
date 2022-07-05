import { configureStore } from "@reduxjs/toolkit";
import freelancesReducer from "../features/freelances";
import themeReducer from "../features/theme";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    freelances: freelancesReducer,
  },
});
