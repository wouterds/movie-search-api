import { Request, Response } from 'express';

import { TMDB } from '../../services';

export const handleMoviesRequest = async (req: Request, res: Response) => {
  console.log(`/movies?q=${req.query.q}`);

  const query = (req.query.q || '') as string;
  if (!query) {
    res.status(400).send({ data: [], error: 'missing query' });
    return;
  }

  const movies = await TMDB.searchMovies(query);

  res.send({ data: movies, error: null });
};
