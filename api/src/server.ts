import * as http from 'http';
import { Product } from "./entity/Product"
import { AppDataSource } from "./data-source"
import express from 'express';

let allProducts : Product [];

const app = express();

AppDataSource.initialize().then(async () => {

    async function retornaDados(){
        // Retornar os produtos do banco de dados...
        const productRepository = AppDataSource.getRepository(Product)
        allProducts = await productRepository.find()
    }

    retornaDados();
    
    app.get('/api/products', (request : any, response : any) => {
        retornaDados();
        response.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        response.status(200).send(allProducts);
    });

    // Servidor
    const server = http.createServer(app);
    const port = 8080;
    server.listen(port, '0.0.0.0', () => console.log('O servidor está em execução http://localhost:8080/api/products'));

}).catch(error => console.log(error))