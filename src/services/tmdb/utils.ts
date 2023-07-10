import { IMAGE_ENDPOINT } from './config';
import { TMDBMovie } from './types';

export const normalizeMovie = (movie: TMDBMovie) => ({
  id: movie.id,
  title: movie.title,
  poster: `${IMAGE_ENDPOINT}${movie.poster_path}`,
  wallpaper: `${IMAGE_ENDPOINT}${movie.backdrop_path}`,
  description: movie.overview,
  releaseDate: new Date(movie.release_date),
});
