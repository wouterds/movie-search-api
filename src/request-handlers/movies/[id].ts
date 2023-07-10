import { Request, Response } from 'express';

import { TMDB } from '../../services';

export const handleMovieRequest = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  console.log(`/movies/${id}`);

  if (!id) {
    res.status(400).send({ data: null, error: 'missing id' });
    return;
  }

  const movie = await TMDB.getMovie(id);
  if (!movie) {
    res.status(404).send({ data: null, error: 'movie not found' });
    return;
  }

  res.send({ data: movie, error: null });
};
