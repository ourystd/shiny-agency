// Actions
const DEFAULT_THEME = "light";
const TOGGLE_THEME = "theme/toggle";

export const toggleThemeAction = () => ({ type: TOGGLE_THEME });

// Reducer
export default function themeReducer(state = DEFAULT_THEME, action) {
  if (action.type === TOGGLE_THEME) {
    // console.log({ state });
    return state === "light" ? "dark" : "light";
  }

  return state;
}
