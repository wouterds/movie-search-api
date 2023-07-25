import { Request, Response } from 'express';

export const handlePingRequest = (_req: Request, res: Response) => {
  // disable cache
  res.setHeader('Cache-Control', 'no-store');

  res.send(`pong ${new Date().toISOString()}`);
};
