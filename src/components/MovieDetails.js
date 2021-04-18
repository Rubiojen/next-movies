import { useEffect, useState } from "react";
import { useLocation, useHistory, useParams } from "react-router";
import StarRatings from "react-star-ratings";
import styled from "styled-components";

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const DetailsContainer = styled.div`
  padding-top: 6em;
  display: flex;
  justify-content: flex-start;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 3em;
`;

const ImageDetail = styled.div`
  width: 260px;
  text-align: center;
  background-color: white;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #696969;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Label = styled.div`
  display: flex;
  padding-bottom: 1em;
`;

const Key = styled.h4`
  font-size: 1.5rem;
  padding-right: 0.5em;
  color: #696969;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Value = styled.label`
  font-size: 1.5rem;
  color: #696969;
`;

const Desc = styled.p`
  font-size: 1.5rem;
  color: #696969;
`;

const BackButton = styled.span`
  width: 20px;
  cursor: pointer;
  margin-right: 2em;
  fill: rgb(51, 82, 146);
`;

const regex = /(<([^>]+)>)/gi;

const MovieDetails = () => {
  const location = useLocation();
  const history = useHistory();
  let { id } = useParams();
  const [movieDetails, setMovieDetails] = useState();
  const { title, largeimage, rating, released, runtime = "", synopsis } =
    movieDetails ?? {};

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    let movieDetails = location.state;
    console.log(`location`, location);
    if (movieDetails) {
      localStorage.setItem(id, JSON.stringify(movieDetails));
      setMovieDetails(movieDetails);
    } else {
      movieDetails = localStorage.getItem(id);
      if (movieDetails) {
        setMovieDetails(JSON.parse(movieDetails));
      } else {
        history.push("/");
      }
    }
  }, [history, id, location]);

  return movieDetails ? (
    <>
      <TitleWrap>
        <BackButton onClick={goBack}>
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M351,9a15,15 0 01 19,0l29,29a15,15 0 01 0,19l-199,199l199,199a15,15 0 01 0,19l-29,29a15,15 0 01-19,0l-236-235a16,16 0 01 0-24z" />
          </svg>
        </BackButton>
        <Title>{title.replace("&#39;", "'")}</Title>
      </TitleWrap>
      <DetailsContainer>
        <ImageDetail>
          <img
            width="260"
            alt={`The movie titled: ${title}`}
            src={largeimage}
          />
          <div style={{ padding: "15px" }}>
            <StarRatings
              rating={rating / 2}
              starRatedColor="#C38918"
              starDimension="20px"
              starSpacing="15px"
            />
          </div>
        </ImageDetail>
        <Details>
          <Label>
            <Key>Year:</Key>
            <Value>{released}</Value>
          </Label>
          <Label>
            <Key>Duration:</Key>
            <Value>{runtime.replace("h", "h ")}</Value>
          </Label>
          <Label>
            <Key>Rating:</Key>
            <Value>{rating / 2} / 5</Value>
          </Label>
          <Desc>{synopsis.replace(regex, " ").replace("&#39;", "'")}</Desc>
        </Details>
      </DetailsContainer>
    </>
  ) : null;
};
export default MovieDetails;
