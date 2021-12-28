import express from 'express';
import usersRoute from './routes/users.route';
import statusRoute from './routes/status.route';

const app = express();

// Configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração de rotas
app.use(usersRoute);
app.use(statusRoute);

// Inicialização do servidor
app.listen(4000, () => {
  console.log(`Aplicação executando em http://localhost:4000 !`);
});