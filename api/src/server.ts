import express, {
  Application, NextFunction, Request, Response,
} from 'express';

const app: Application = express();

const miniDatabase = [{ name: 'Roberto', age: 26 }, { name: 'Luciana', age: 56 }];

app.get('/', (_req: Request, res: Response, _next: NextFunction) => {
  res.send(miniDatabase);
});

app.listen(5000, () => console.log('Server running at port 5000'));
