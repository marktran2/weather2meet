import express, { json, Request, Response } from 'express';
import { echo } from './echo';
import morgan from 'morgan';
import config from './config.json';
import cors from 'cors';
import errorHandler from 'middleware-http-errors';

import './weather.js'

// Set up web app
const app = express();
// Use middleware that allows us to access the JSON body of requests
app.use(json());
// Use middleware that allows for access from other domains
app.use(cors());
// for logging errors (print to terminal)
app.use(morgan('dev'));

const PORT = parseInt(process.env.PORT || config.port);
const HOST = process.env.IP || 'localhost';

// Example get request
app.get('/echo', (req, res) => {
  const data = req.query.echo;
  return res.json(echo(data));
});

app.post('/auth/login/v3', (req, res) => {
  const { email, password } = req.body;
  res.json(authLoginV3(email, password));
});

app.delete('/dm/remove/v2', (req, res) => {
  const token = req.header('token');
  const dmId = parseInt(req.query.dmId);
  res.json(dmRemoveV2(token, dmId));
});

// Keep this BENEATH route definitions
// handles errors nicely
app.use(errorHandler());

// start server
const server = app.listen(PORT, HOST, () => {
  // DO NOT CHANGE THIS LINE
  console.log(`⚡️ Server started on port ${PORT} at ${HOST}`);
});

// For coverage, handle Ctrl+C gracefully
process.on('SIGINT', () => {
  server.close(() => console.log('Shutting down server gracefully.'));
});
