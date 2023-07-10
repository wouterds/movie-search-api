import axios from 'axios';

const API_ENDPOINT = 'https://api.themoviedb.org/3';
const API_KEY = process.env.TMDB_API_KEY;

export const TMDB = {
  searchMovies: async (query: string) => {
    try {
      const response = await axios.get(`${API_ENDPOINT}/search/movie`, {
        params: {
          api_key: API_KEY,
          query,
        },
      });

      if (response.status !== 200) {
        return [];
      }

      return response.data.results;
    } catch {
      return [];
    }
  },
};
