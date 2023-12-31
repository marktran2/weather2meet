import express, { json, Request, Response } from 'express';
import morgan from 'morgan';
import config from './config.json';
import cors from 'cors';
import errorHandler from 'middleware-http-errors';
import weatherGet from './weather';

// Set up web app
const app = express();
// Use middleware that allows us to access the JSON body of requests
app.use(json());
// Use middleware that allows for access from other domains
app.use(cors());
// for logging errors (print to terminal)
app.use(morgan('dev'));

const PORT: number = parseInt(process.env.PORT || config.port);
const HOST: string = process.env.IP || 'localhost';

// Example get request
// app.get('/echo', (req: Request, res: Response) => {
//   const data = req.query.echo as string;
//   return res.json(echo(data));
// });

app.get('/forecast', async (req: Request, res: Response) => {
  const city = req.query.city as string;

  const data = await weatherGet(city);
  res.json(data)
})

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