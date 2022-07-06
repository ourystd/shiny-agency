import { DEFAULT_THEME, themeActions } from "./theme";
import themeReducer from "./theme";

describe("Theme actions", () => {
  it("Should create a toggle action object", () => {
    expect(themeActions.toggle()).toEqual({
      type: "theme/toggle",
    });
  });

  it("Should create a set action object", () => {
    expect(themeActions.set("dark")).toEqual({
      type: "theme/set",
      payload: "dark",
    });
    expect(themeActions.set("light")).toEqual({
      type: "theme/set",
      payload: "light",
    });
  });

  it("Should create a reset action object", () => {
    expect(themeActions.reset()).toEqual({
      type: "theme/reset",
    });
  });
});

describe("Theme Reducer", () => {
  it("Should should return the initial state when state is undefined", () => {
    expect(themeReducer(undefined, { type: "@INIT" })).toEqual(DEFAULT_THEME);
  });

  it("Should toggle theme", () => {
    expect(themeReducer("light", themeActions.toggle())).toEqual("dark");
    expect(themeReducer("dark", themeActions.toggle())).toEqual("light");
  });

  it("Should set theme", () => {
    expect(themeReducer("light", themeActions.set("dark"))).toEqual("dark");
    expect(themeReducer("dark", themeActions.set("light"))).toEqual("light");
  });

  it("Should reset theme", () => {
    expect(themeReducer("light", themeActions.reset())).toEqual(DEFAULT_THEME);
    expect(themeReducer("dark", themeActions.reset())).toEqual(DEFAULT_THEME);
  });

  it("Should return state on invalid action", () => {
    expect(themeReducer("light", { type: "INVALID_ACTION" })).toEqual("light");
    expect(themeReducer("dark", { type: "INVALID_ACTION" })).toEqual("dark");
  });
});
