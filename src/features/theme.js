import { createAction } from "@reduxjs/toolkit";
// Actions
const DEFAULT_THEME = "light";

export const toggleTheme = createAction("theme/toggle");
export const setTheme = createAction("theme/set");

// setTheme("dark") ==> ({type: "theme/set", payload: "dark"})

// Reducer
export default function themeReducer(state = DEFAULT_THEME, action) {
  if (action.type === toggleTheme.toString()) {
    return state === "light" ? "dark" : "light";
  }
  if (action.type === setTheme.toString()) {
    return action.payload;
  }

  return state;
}
