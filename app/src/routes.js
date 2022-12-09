import express from 'express';
//import bodyParser from 'body-parser';
import { createPool } from 'mysql';

const connection = createPool({
  host     : 'localhost',
  user     : 'root',
  port : 3306,
  password : 'root123',
  database : 'thiago'
});

// Iniciando o app.
const app = express();

// Criando uma rota GET que retorna os dados da tabela produtos.
app.get('/banco-mysql/products', function (req, res) {
    // Conectando ao banco.
    connection.getConnection(function (err, connection) {
    
    // selecionar todos os dados da tabela usuário.
    connection.query('SELECT * FROM product', function (error, results, fields) {
      res.send(results)
    });
  });
});

// Iniciando o servidor.
app.listen(3000, () => {
  console.log("http://localhost:3000/banco-mysql/products");
});