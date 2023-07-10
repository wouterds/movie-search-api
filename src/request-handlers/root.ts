import { Request, Response } from 'express';

export const handleRootRequest = (_req: Request, res: Response) => {
  console.log('/');

  res.send([
    {
      path: '/ping',
      description: 'Returns a pong with the current timestamp',
      params: [],
    },
    {
      path: '/movies',
      description: 'Returns a list of movies matching the query',
      params: [
        {
          name: 'q',
          type: 'string',
          description: 'The query to search for',
        },
      ],
    },
    {
      path: '/movies/:id',
      description: 'Returns a movie with the given id',
      params: [
        {
          name: 'id',
          type: 'number',
          description: 'The id of the movie to return',
        },
      ],
    },
    {
      path: '/movies/images/:path',
      description: 'Returns an image with the given path',
      params: [
        {
          name: 'path',
          type: 'string',
          description: 'The path of the image to return',
        },
      ],
    },
  ]);
};
