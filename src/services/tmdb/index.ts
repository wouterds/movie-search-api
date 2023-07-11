import axios from 'axios';

import { API_ENDPOINT, API_KEY, IMAGE_ENDPOINT } from './config';
import { TMDBMovie } from './types';
import { normalizeMovie } from './utils';

export const TMDB = {
  searchMovies: async (query: string) => {
    try {
      const response = await axios.get(`${API_ENDPOINT}/search/movie`, {
        params: { api_key: API_KEY, query, language: 'en-US' },
      });

      if (response.status !== 200) {
        return [];
      }

      return response.data.results
        .filter((movie: TMDBMovie) => movie.poster_path)
        .map(normalizeMovie);
    } catch (e) {
      return [];
    }
  },

  getMovie: async (id: number) => {
    try {
      const response = await axios.get(`${API_ENDPOINT}/movie/${id}`, {
        params: { api_key: API_KEY },
      });

      if (response.status !== 200) {
        return null;
      }

      return normalizeMovie(response.data);
    } catch (e) {
      return null;
    }
  },

  getImageURL: (path: string) => {
    return `${IMAGE_ENDPOINT}/${path}`;
  },
};
