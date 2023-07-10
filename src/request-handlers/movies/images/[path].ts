import axios from 'axios';
import { Request, Response } from 'express';

import { TMDB } from '../../../services';

export const handleMovieImageRequest = async (req: Request, res: Response) => {
  const path = req.params.path;
  console.log(`/movies/images/${path}`);

  if (!path) {
    res.status(400).send({ error: 'missing path' });
    return;
  }

  const response = await axios.get(TMDB.getImageURL(path), {
    responseType: 'stream',
  });

  response.data.pipe(res);
};
