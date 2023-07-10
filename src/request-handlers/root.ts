import { Request, Response } from 'express';

export const handleRootRequest = (_req: Request, res: Response) => {
  res.send('hello world');
};
