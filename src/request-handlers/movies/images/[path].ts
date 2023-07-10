import axios from 'axios';
import { Request, Response } from 'express';

import { TMDB } from '../../../services';

export const handleMovieImageRequest = async (req: Request, res: Response) => {
  const path = req.params.path;
  console.log(`/movies/images/${path}`);

  if (!path) {
    res.status(400).send({ data: null, error: 'missing path' });
    return;
  }

  const imageUrl = TMDB.getImageURL(path);

  const response = await axios.get(imageUrl, {
    responseType: 'stream',
  });

  response.data.pipe(res);
};
