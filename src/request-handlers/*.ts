import { Request, Response } from 'express';

export const handleCatchAllRequest = (_req: Request, res: Response) => {
  res.status(404).send('Not Found');
};
