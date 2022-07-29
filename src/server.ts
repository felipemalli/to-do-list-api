import express, {
  Application, NextFunction, Request, Response
} from 'express';
import Task from './database/models/Task';
import User from './database/models/User';

const app: Application = express();

const miniDatabase = [{ name: 'Roberto', age: 26 }, { name: 'Luciana', age: 56 }];

app.get('/', (_req: Request, res: Response, _next: NextFunction) => {
  res.send(miniDatabase);
});

app.get('/user', async (_req: Request, res: Response, _next: NextFunction) => {
  try {
    const userFind = await User.findAll();
    res.send(userFind);
  } catch(e) {
    console.log(e);
  }
});

app.get('/task', async (_req: Request, res: Response, _next: NextFunction) => {
  try {
    const taskFind = await Task.findAll();
    res.send(taskFind);
  } catch(e) {
    console.log(e);
  }
});

app.post('/test', async (_req: Request, res: Response, _next: NextFunction) => {
  const userCreated = await User.create({ username: 'fel', email: 'feli@g.com', password: 'senha'});
  res.send(userCreated);
});


app.listen(process.env.PORT, () => console.log(`Server running at port ${process.env.PORT}`));
