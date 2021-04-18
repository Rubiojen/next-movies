import { DataContext } from "Context";
import { useContext, useMemo } from "react";
import styled from "styled-components";
import { useGetMovies } from "helpers/useGetMovies";
import MovieListItem from "./MovieListItem";

const Gallery = styled.div`
  display: flex;
  justify-content: fle;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const MovieList = () => {
  const { isLoading, isError, errorMessage } = useGetMovies();
  const {
    state: { filteredMovies },
  } = useContext(DataContext);

  const movieList = useMemo(() => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (isError) {
      return <div>{errorMessage}</div>;
    }
    return filteredMovies.map((movie, index) => (
      <MovieListItem key={`${index}-${movie.title}`} movie={movie} />
    ));
  }, [errorMessage, filteredMovies, isError, isLoading]);

  return <Gallery>{movieList}</Gallery>;
};
