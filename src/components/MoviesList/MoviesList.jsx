import { MovieList, MovieTitle, MovieImage } from "./MoviesList.style";
import { useNavigate } from "react-router-dom";

export const MoviesList = ({ movies }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <MovieList>
      {movies.map((movie, index) => (
        <div key={movie.title + index} onClick={() => handleClick(movie.id)}>
          <MovieTitle>{movie.title}</MovieTitle>
          {movie.description && <div>{movie.description}</div>}
          <MovieImage src={movie.image} alt={movie.title} width="auto" />
        </div>
      ))}
    </MovieList>
  );
};
