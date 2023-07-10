import { TMDBMovie } from './types';

export const normalizeMovie = (movie: TMDBMovie) => ({
  id: movie.id,
  title: movie.title,
  poster: `/movies/images/${movie.poster_path}`.replace('//', '/'),
  wallpaper: `/movies/images/${movie.backdrop_path}`.replace('//', '/'),
  description: movie.overview,
  releaseDate: new Date(movie.release_date),
});
