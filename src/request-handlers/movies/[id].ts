import { Request, Response } from 'express';

import { Obfuscator, TMDB } from '../../services';

export const handleMovieRequest = async (req: Request, res: Response) => {
  const id = Obfuscator.decode(req.params.id);
  if (!id) {
    res.status(400).send({ error: 'missing or invalid id' });
    return;
  }

  const movie = await TMDB.getMovie(id);
  if (!movie) {
    res.status(404).send({ error: 'movie not found' });
    return;
  }

  // cache 5 minutes
  res.setHeader('Cache-Control', 'public, max-age=300');

  res.send(movie);
};
