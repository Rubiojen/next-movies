import MovieDetails from "components/MovieDetails";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 6em;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Movie = () => {
  return (
    <Container>
      <MovieDetails />
    </Container>
  );
};
export default Movie;
