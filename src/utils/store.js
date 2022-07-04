import { createStore, combineReducers } from "redux";
import freelancesReducer from "../features/freelances";
import themeReducer from "../features/theme";

const storeReducer = combineReducers({
  theme: themeReducer,
  freelances: freelancesReducer,
});

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(storeReducer, reduxDevtools);

console.log({ store: store.getState() });
