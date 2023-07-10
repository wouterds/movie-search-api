import { Obfuscator } from '../obfuscator';
import { TMDBMovie } from './types';

export const normalizeMovie = (movie: TMDBMovie) => ({
  id: Obfuscator.encode(movie.id),
  title: movie.title,
  poster: movie.poster_path
    ? `/movies/images/${movie.poster_path}`.replace('//', '/')
    : null,
  wallpaper: movie.backdrop_path
    ? `/movies/images/${movie.backdrop_path}`.replace('//', '/')
    : null,
  description: movie.overview,
  releaseDate: new Date(movie.release_date),
});
