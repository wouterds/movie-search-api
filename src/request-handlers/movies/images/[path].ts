import axios from 'axios';
import { Request, Response } from 'express';

import { TMDB } from '../../../services';

export const handleMovieImageRequest = async (req: Request, res: Response) => {
  const path = req.params.path;
  if (!path) {
    res.status(400).send({ error: 'missing path' });
    return;
  }

  const response = await axios.get(TMDB.getImageURL(path), {
    responseType: 'stream',
  });

  // cache 1 day
  res.setHeader('Cache-Control', 'public, max-age=86400');

  response.data.pipe(res);
};
