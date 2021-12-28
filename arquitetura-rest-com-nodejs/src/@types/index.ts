import express, { Request, Response, NextFunction } from 'express';
import usersRoute from '../routes/users.route';

const app = express();

// Configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração de rotas
app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ foo: 'Sucesso!' });
});

// Inicialização do servidor
app.listen(4000, () => {
  console.log(`Aplicação executando em http://localhost:4000 !`);
});