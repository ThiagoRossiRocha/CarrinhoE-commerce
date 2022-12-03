import http from 'http';
import express from 'express';
import dados from './banco.json' assert { type: 'json' };
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/api/products', (request, response) => {
  response.status(200).send(dados);
});

/** Servidor */
const server = http.createServer(app);
const port = 8080;
server.listen(port, '0.0.0.0', () => console.log('O servidor está em execução na porta: ' + port));
