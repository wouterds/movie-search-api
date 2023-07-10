import axios from 'axios';

const TAG = '[services/tmdb]';

const API_ENDPOINT = 'https://api.themoviedb.org/3';
const IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w500';
const API_KEY = process.env.TMDB_API_KEY;

type TMDBMovie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
};

const normalizeMovie = (movie: TMDBMovie) => ({
  id: movie.id,
  title: movie.title,
  poster: `${IMAGE_ENDPOINT}${movie.poster_path}`,
  description: movie.overview,
  releaseDate: new Date(movie.release_date),
});

export const TMDB = {
  searchMovies: async (query: string) => {
    const start = Date.now();
    console.log(TAG, `Searching movies for "${query}"`);

    try {
      const response = await axios.get(`${API_ENDPOINT}/search/movie`, {
        params: {
          api_key: API_KEY,
          query,
        },
      });

      if (response.status !== 200) {
        console.error(TAG, `unexpected response, status: ${response.status}`);
        return [];
      }

      const movies = response.data.results.map(normalizeMovie);

      console.log(
        TAG,
        `Found ${movies.length} movies in ${Date.now() - start}ms`,
      );

      return movies;
    } catch (e) {
      console.error(TAG, `${e}`);
      return [];
    }
  },
};
