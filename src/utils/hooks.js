import { useEffect, useState } from "react";

export const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);

      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(storedValue));
    } catch (err) {
      console.log(err);
    }
  }, [keyName, storedValue]);

  return [storedValue, setStoredValue];
};

const FETCH_STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  SUCCESS: "success",
  ERROR: "error",
};
export const useFetch = (url, defaultDataValue = null) => {
  const [state, setState] = useState({
    data: defaultDataValue,
    status: FETCH_STATUS.IDLE,
  });

  useEffect(() => {
    setState((prevState) => ({ ...prevState, status: FETCH_STATUS.PENDING }));
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setState((prevState) => ({
          ...prevState,
          data,
          status: FETCH_STATUS.SUCCESS,
          error: null,
        }))
      )
      .catch((err) =>
        setState((prevState) => ({
          ...prevState,
          status: FETCH_STATUS.ERROR,
          error: err,
        }))
      );
  }, [setState, url]);

  const error = state.status === FETCH_STATUS.ERROR;
  const isLoading = state.status === FETCH_STATUS.PENDING;

  return { ...state, error, isLoading };
};
