import express, {
  Application, Request, Response, NextFunction,
} from 'express';

const app: Application = express();

const miniDatabase = [{ name: 'Roberto', age: 26 }, { name: 'Luciana', age: 56 }];

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send(miniDatabase);
});

app.listen(5000, () => console.log('Server runnning'));
