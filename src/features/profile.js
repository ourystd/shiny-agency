import { selectFreelance } from "../utils/selectors";
import { createAction, createReducer } from "@reduxjs/toolkit";

// le state initial de cette feature est un objet vide
const initialState = {
  // chaque propriété de cet objet correspond à l'Id d'un freelance
  // 3: { status: 'void' }
};

const profileFetching = createAction("freelance/fetching", (freelanceId) => ({
  payload: { freelanceId },
}));

const profileResolved = createAction(
  "freelance/resolved",
  (freelanceId, data) => ({
    payload: { freelanceId, data },
  })
);

const profileRejected = createAction(
  "freelance/rejected",
  (freelanceId, error) => ({
    payload: { freelanceId, error },
  })
);

export function fetchOrUpdateProfile(freelanceId) {
  // on retourne un thunk
  return async (dispatch, getState) => {
    // ...
    const selectFreelanceById = selectFreelance(freelanceId);
    const status = selectFreelanceById(getState()).status;
    if (status === "pending" || status === "updating") {
      return;
    }
    dispatch(profileFetching(freelanceId));
    try {
      const response = await fetch(
        `http://localhost:8000/freelance?id=${freelanceId}`
      );
      const data = await response.json();
      dispatch(profileResolved(freelanceId, data));
    } catch (error) {
      dispatch(profileRejected(freelanceId, error));
    }
  };
}

function setVoidIfUndefined(draft, freelanceId) {
  if (draft[freelanceId] === undefined) {
    draft[freelanceId] = { status: "void" };
  }
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(profileFetching, (draft, action) => {
      setVoidIfUndefined(draft, action.payload.freelanceId);
      if (draft[action.payload.freelanceId].status === "void") {
        draft[action.payload.freelanceId].status = "pending";
        return;
      }
      if (draft[action.payload.freelanceId].status === "rejected") {
        draft[action.payload.freelanceId].error = null;
        draft[action.payload.freelanceId].status = "pending";
        return;
      }
      if (draft[action.payload.freelanceId].status === "resolved") {
        draft[action.payload.freelanceId].status = "updating";
        return;
      }
    })
    .addCase(profileResolved, (draft, action) => {
      setVoidIfUndefined(draft, action.payload.freelanceId);
      if (
        draft[action.payload.freelanceId].status === "pending" ||
        draft[action.payload.freelanceId].status === "updating"
      ) {
        draft[action.payload.freelanceId].data = action.payload.data;
        draft[action.payload.freelanceId].status = "resolved";
        return;
      }
      return;
    })
    .addCase(profileRejected, (draft, action) => {
      setVoidIfUndefined(draft, action.payload.freelanceId);
      if (
        draft[action.payload.freelanceId].status === "pending" ||
        draft[action.payload.freelanceId].status === "updating"
      ) {
        draft[action.payload.freelanceId].error = action.payload.error;
        draft[action.payload.freelanceId].data = null;
        draft[action.payload.freelanceId].status = "rejected";
        return;
      }
      return;
    })
);
