import { Request, Response } from 'express';

import { TMDB } from '../../services';

export const handleMoviesRequest = async (req: Request, res: Response) => {
  const query = (req.query.q || '') as string;
  if (!query) {
    res.status(400).send({ error: 'missing query' });
    return;
  }

  const movies = await TMDB.searchMovies(query);

  // cache 5 minutes
  res.setHeader('Cache-Control', 'public, max-age=300');

  res.send(movies);
};
