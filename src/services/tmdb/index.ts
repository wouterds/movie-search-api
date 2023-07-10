import axios from 'axios';

import { API_ENDPOINT, API_KEY } from './config';
import { normalizeMovie } from './utils';

const TAG = '[services/tmdb]';

export const TMDB = {
  searchMovies: async (query: string) => {
    const start = Date.now();
    console.log(TAG, `Searching movies for "${query}"`);

    try {
      const response = await axios.get(`${API_ENDPOINT}/search/movie`, {
        params: { api_key: API_KEY, query },
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
