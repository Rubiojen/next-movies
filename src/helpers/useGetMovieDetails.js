import { useHttpGetRequest } from "./useHttpGetRequest";
const REMOTE_URL = "http://localhost:3000/movies";

export const useGetMovieDetails = ({ id }) => {
  const { data, isLoading, isError, errorMessage } = useHttpGetRequest(
    `${REMOTE_URL}/${id}`
  );

  console.log(`useGetMovieDetails`, data, errorMessage, isError, isLoading);

  return { movieDetails: data[0], isLoading, isError, errorMessage };
};
