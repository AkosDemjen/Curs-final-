import { useParams } from "react-router-dom";
import { apiFactory } from "../api";
import { useEffect, useState } from "react";
import { IFrame } from "../components/MoviesList/MoviesList.style";

export const MoviesDetails = (props) => {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  console.log(params);

  useEffect(() => {
    getMovieDetails();
  });
  async function getMovieDetails() {
    const { data, status } = await apiFactory()
      .movies()
      .getMovieById(params.id);

    if (status === 200) {
      setMovieDetails(data);
    }
  }
  return (
    <div>
      <div> {movieDetails.fullTitle}</div>
      <IFrame src={movieDetails.linkEmbed} title="MovieTrailer"></IFrame>
    </div>
  );
};
