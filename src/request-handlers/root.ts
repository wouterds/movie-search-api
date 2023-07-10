import { Request, Response } from 'express';

export const handleRootRequest = (_req: Request, res: Response) => {
  console.log('/');

  res.send('hello world');
};
