import { movies } from "./movies";

export const apiFactory = () => ({
  movies: () => movies(),
});
