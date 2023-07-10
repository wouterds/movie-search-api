import dotenv from 'dotenv';

// load .env before loading anything else
dotenv.config();

import express from 'express';

import {
  handleMovieImageRequest,
  handleMovieRequest,
  handleMoviesRequest,
  handlePingRequest,
  handleRootRequest,
} from './request-handlers';

const app = express();
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
