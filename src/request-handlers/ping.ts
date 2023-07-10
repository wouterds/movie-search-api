import { Request, Response } from 'express';

export const handlePingRequest = (_req: Request, res: Response) => {
  console.log('/ping');

  res.send(`pong ${new Date().toISOString()}`);
};
