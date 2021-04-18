import { useEffect, useReducer, useState } from "react";
import { getReducer } from "./GetReducer";

const initialState = {
  isLoading: true,
  isError: null,
  errorMessage: null,
};

export const useHttpGetRequest = (URL) => {
  const [data, setData] = useState([]);
  const [state, dispatch] = useReducer(getReducer, initialState);

  useEffect(() => {
    dispatch({ type: "GET_STARTED" });
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_FINISHED" });
        setData(json);
      })
      .catch((err) => {
        dispatch({
          type: "GET_ERROR",
          payload: err.message,
        });
      });
  }, [URL]);

  return {
    data,
    isLoading: state.isLoading,
    isError: state.isError,
    errorMessage: state.errorMessage,
  };
};
