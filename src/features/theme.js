import { createSlice } from "@reduxjs/toolkit";

export const DEFAULT_THEME = "light";

const { actions, reducer } = createSlice({
  name: "theme",
  initialState: DEFAULT_THEME,

  reducers: {
    toggle: (state) => {
      return state === "light" ? "dark" : "light";
    },
    set: (_, action) => {
      return action.payload;
    },
    reset: () => DEFAULT_THEME,
  },
});

export const themeActions = actions;

export default reducer;
