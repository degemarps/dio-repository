import express, { Request, Response, NextFunction } from 'express';

const app = express();

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ foo: 'Sucesso!' });
});

app.listen(4000, () => {
  console.log(`Aplicação executando em http://localhost:4000 !`);
});