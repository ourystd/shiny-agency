import produce from "immer";
import { selectFreelances } from "../utils/selectors";

const initialState = {
  status: "idle",
  data: null,
  error: null,
};

const FETCHING = "freelances/fetching";
const RESOLVED = "freelances/resolved";
const REJECTED = "freelances/rejected";

const frealancesFetching = () => ({ type: FETCHING });
const frealancesResolved = (data) => ({ type: RESOLVED, payload: data });
const frealancesRejected = (error) => ({ type: REJECTED, payload: error });

export default function freelancesReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case FETCHING: {
        if (draft.status === "rejected") {
          draft.error = null;
        }

        draft.status = draft.status === "resolved" ? "updating" : "pending";

        return;
      }

      case RESOLVED: {
        draft.data = action.payload;
        if (draft.status === "rejected") {
          draft.error = null;
        }
        draft.status = "resolved";
        return;
      }

      case REJECTED: {
        draft.error = action.payload;
        draft.status = "rejected";
        return;
      }

      default:
        return;
    }
  });
}

export const fetchOrUpdateFreelances = async (store) => {
  const currentStatus = selectFreelances(store.getState()).status;

  if (["pending", "updating"].includes(currentStatus)) return;

  store.dispatch(frealancesFetching());

  try {
    const response = await fetch(`http://localhost:8000/freelances/`);
    const data = await response.json();
    store.dispatch(frealancesResolved(data));
  } catch (error) {
    store.dispatch(frealancesRejected(error));
  }
};
