import { createStore, combineReducers } from "redux";
import { themeReducer } from "../features/theme";

const storeReducer = combineReducers({
  theme: themeReducer,
});

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(storeReducer, reduxDevtools);

console.log({ store: store.getState() });
