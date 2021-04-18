import { DataContext } from "Context";
import { useContext, useEffect } from "react";
import { useHttpGetRequest } from "./useHttpGetRequest";
const REMOTE_URL = "http://localhost:3000/movies";

export const useGetMovies = () => {
  const { dispatch } = useContext(DataContext);
  const { data, isLoading, isError, errorMessage } = useHttpGetRequest(
    REMOTE_URL
  );

  useEffect(() => {
    if (data.length > 0) {
      dispatch({ type: "SET_MOVIES", payload: data });
      dispatch({ type: "SET_FILTERED_MOVIES", payload: data });
    }
  }, [data, dispatch]);

  return { isLoading, isError, errorMessage };
};
