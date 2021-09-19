import express, { Request, Response, NextFunction } from 'express';
const app = express();

app.get('/', (req: Request, res: Response): void => {
  console.log('Hello 5000!');
  res.json({ message: 'msg from homepage' });
  res.send('Hello 5000!');
});

// function loggerMiddleware(
//   request: express.Request,
//   response: express.Response,
//   next
// ) {
//   console.log(`${request.method} ${request.path}`);
//   next();
// }

// app.use(loggerMiddleware);

// app.get('/hello', (request, response) => {
//   console.log('Hello world!');
//   response.send('Hello world!');
// });

app.listen(5000, (): void => {
  console.log('server is running on 5000');
});
