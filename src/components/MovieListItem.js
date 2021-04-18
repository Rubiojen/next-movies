import { useHistory } from "react-router-dom";
import styled from "styled-components";

const MovieItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px;
  width: 200px;
  margin-bottom: 30px;
  text-align: center;
  background-color: white;
`;

const ImageButtom = styled.div`
  font-size: 1.2rem;
  padding: 5px;
`;

const Title = styled.h2`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  font-size: 1.5rem;
  padding: 10px;
  color: black;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const SubTitle = styled.h4`
  font-size: 1.2rem;
  padding: 5px;
`;

const ImageWrap = styled.div`
  min-height: 280px;
`;

const Image = styled.img`
  &:hover {
    cursor: pointer;
  }
  width: 100%;
`;

const MovieListItem = ({ movie }) => {
  const history = useHistory();
  const { image, id, title, released } = movie;

  const navigateToMovieDetails = () => {
    history.push(`/movie/${id}`, movie);
  };

  return (
    <MovieItem>
      <ImageWrap>
        <Image
          width="200"
          alt={`The movie titled: ${title}`}
          src={image}
          onClick={() => navigateToMovieDetails()}
        />
      </ImageWrap>
      <ImageButtom>
        <Title onClick={() => navigateToMovieDetails()}>
          {title.replace("&#39;", "'")}
        </Title>
        <SubTitle>{released}</SubTitle>
      </ImageButtom>
    </MovieItem>
  );
};

export default MovieListItem;
