import { createStore, combineReducers } from "redux";
import { themeReducer } from "../features/theme";

const storeReducer = combineReducers({
  theme: themeReducer,
});

export const store = createStore(storeReducer);

console.log({ store: store.getState() });
