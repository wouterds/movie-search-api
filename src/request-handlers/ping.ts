import { Request, Response } from 'express';

export const handlePingRequest = (_req: Request, res: Response) => {
  res.send(`pong ${new Date().toISOString()}`);
};
