import dotenv from 'dotenv';
import express from 'express';

import { handleRootRequest } from './request-handlers';

// load .env
dotenv.config();

const app = express();
app.get('/', handleRootRequest);

app.listen(process.env.PORT, () => {
  console.log(
    `Application running on port http://localhost:${process.env.PORT} 🚀`,
  );
});
