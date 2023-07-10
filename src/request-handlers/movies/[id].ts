import { Request, Response } from 'express';

import { Obfuscator, TMDB } from '../../services';

export const handleMovieRequest = async (req: Request, res: Response) => {
  console.log(`/movies/${req.params.id}`);
  const id = Obfuscator.decode(req.params.id);

  if (!id) {
    res.status(400).send({ data: null, error: 'missing or invalid id' });
    return;
  }

  const movie = await TMDB.getMovie(id);
  if (!movie) {
    res.status(404).send({ data: null, error: 'movie not found' });
    return;
  }

  res.send({ data: movie, error: null });
};
