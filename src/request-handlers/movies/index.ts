import { Request, Response } from 'express';

import { TMDB } from '../../services';

export const handleMoviesRequest = async (req: Request, res: Response) => {
  const query = (req.query.q || '') as string;
  console.log(`/movies?q=${query}`);

  if (!query) {
    res.status(400).send({ error: 'missing query' });
    return;
  }

  const movies = await TMDB.searchMovies(query);

  res.send(movies);
};
