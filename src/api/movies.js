import { instance } from "./instance";

const apiKey = "k_9n5qgfid"; //"k_6710c55y"; //

export const movies = () => ({
  getAll: async (searchCriteria) => {
    const { data, status } = await instance({
      method: "GET",
      url: `/SearchMovie/${apiKey}/${searchCriteria}`,
    });
    return { data, status };
  },
  getMostPopularMovies: async () => {
    const { data, status } = await instance({
      method: "GET",
      url: `/MostPopularMovies/${apiKey}`,
    });
    return { data, status };
  },
  getMovieById: async (id) => {
    const { data, status } = await instance({
      method: "GET",
      url: `/Trailer/${apiKey}/${id}`,
    });
    return { data, status };
  },
});
