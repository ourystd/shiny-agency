import { selectSurvey } from "../utils/selectors";
import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  data: null,
  error: null,
};

const surveyFetching = createAction("survey/fetching");
const surveyResolved = createAction("survey/resolved");
const surveyRejected = createAction("survey/rejected");

export async function fetchOrUpdateSurvey(store) {
  const status = selectSurvey(store.getState()).status;

  if (status === "pending" || status === "updating") {
    return;
  }
  store.dispatch(surveyFetching());
  try {
    const response = await fetch("http://localhost:8000/survey");
    const data = await response.json();
    store.dispatch(surveyResolved(data));
  } catch (error) {
    store.dispatch(surveyRejected(error));
  }
}

export default createReducer(initialState, (builder) => {
  return builder
    .addCase(surveyFetching, (draft) => {
      if (draft.status === "idle") {
        draft.status = "pending";
        return;
      }
      if (draft.status === "rejected") {
        draft.error = null;
        draft.status = "pending";
        return;
      }
      if (draft.status === "resolved") {
        draft.status = "updating";
        return;
      }
      return;
    })
    .addCase(surveyResolved, (draft, action) => {
      if (draft.status === "pending" || draft.status === "updating") {
        draft.data = action.payload;
        draft.status = "resolved";
        return;
      }
      return;
    })
    .addCase(surveyRejected, (draft, action) => {
      if (draft.status === "pending" || draft.status === "updating") {
        draft.error = action.payload;
        draft.data = null;
        draft.status = "rejected";
        return;
      }
      return;
    });
});
