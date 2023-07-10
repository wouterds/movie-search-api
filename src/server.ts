import dotenv from 'dotenv';

// load .env before loading anything else
dotenv.config();

import express from 'express';
import morgan from 'morgan';

import {
  handleMovieImageRequest,
  handleMovieRequest,
  handleMoviesRequest,
  handlePingRequest,
  handleRootRequest,
} from './request-handlers';

// custom morgan token to log the client ip with support for cloudflare ip
morgan.token('ip', req => {
  return (req.headers['cf-connecting-ip'] ||
    req.headers['x-forwarded-for'] ||
    req.socket.remoteAddress) as string;
});

const app = express();

// middlewares
app.use(morgan(':ip :method :url :status :response-time ms'));

// endpoints
app.get('/', handleRootRequest);
app.get('/ping', handlePingRequest);
app.get('/movies', handleMoviesRequest);
app.get('/movies/:id', handleMovieRequest);
app.get('/movies/images/:path', handleMovieImageRequest);

app.listen((process.env.PORT || 3000) as number, '0.0.0.0', () => {
  console.log(
    `Application running on port http://localhost:${process.env.PORT} 🚀`,
  );
});
