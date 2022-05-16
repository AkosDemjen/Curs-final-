import styled from "styled-components";

export const MovieList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #333232;
  padding-top: 2rem;
`;

export const MovieTitle = styled.div`
  color: #e03616;
  font-weight: 600;
  text-align: center;
  font-size: 1.6rem;
`;

export const MovieImage = styled.img`
  width: 35rem;
  padding: 1rem;
  cursor: pointer;
`;

export const MoviesContainer = styled.div`
  background-color: #bfc0c0;
  padding-top: 1rem;
  justify-content: space-between;
`;

export const SearchButton = styled.button`
  border: 1px solid #333232;
  color: #ffffff;
  font-size: 1.6rem;
  background-color: #218380;
  border-radius: 5px;
  cursor: pointer;
  padding: 0.8rem;
`;

export const SearchInput = styled.input`
  border: 1px solid #333232;
  border-radius: 5px;
  height: 2.5rem;
  padding: 0.7rem 2.5rem 2px 3rem;
  background-color: #f5f5f5;
  margin: 1rem;
`;

export const IFrame = styled.iframe`
  width: 100%;
  min-height: 55rem;
`;

export const SearchBar = styled.div`
  display: flex;
`;

export const SearchButtonWrapper = styled.div`
  margin: 0.4rem 1.2rem;
`;

export const MovieTrailer = styled.div`
  background-color: #333232;
`;

export const FullTitle = styled.div`
  color: #333232;
  font-weight: 600;
  font-size: 1.6rem;
`;
