import { useState, useEffect } from "react";
import { apiFactory } from "../api";
import { MoviesList } from "../components/MoviesList/MoviesList";
import {
  MoviesContainer,
  SearchButton,
  SearchInput,
  SearchBar,
  SearchButtonWrapper,
} from "../components/MoviesList/MoviesList.style";

export const Movies = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMostPopularMovies();
  }, []);

  const onSearch = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };
  async function getMostPopularMovies() {
    const { data, status } = await apiFactory().movies().getMostPopularMovies();
    console.log(data);

    if (status === 200) {
      setMovies(data.items);
    }
  }
  async function getAllMovies() {
    const { data, status } = await apiFactory().movies().getAll(searchValue);

    if (status === 200) {
      setMovies(data.results);
    }
  }
  return (
    <MoviesContainer>
      <SearchBar>
        <SearchInput onChange={onSearch} />
        <SearchButtonWrapper>
          <SearchButton onClick={() => getAllMovies()}>Search</SearchButton>
        </SearchButtonWrapper>
      </SearchBar>
      {movies && movies.length > 0 && <MoviesList movies={movies} />}
    </MoviesContainer>
  );
};
