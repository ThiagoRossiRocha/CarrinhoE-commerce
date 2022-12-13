import * as http from 'http';
import { Product } from "./entity/Product"
import { AppDataSource } from "./data-source"
import express from 'express';

let allProducts : Product [];

const app = express();

AppDataSource.initialize().then(async () => {

    async function cadastraDados() {
        // cadastrar os produtos para o banco de dados...
        const product = new Product()
        product.image = "https://imagensemoldes.com.br/wp-content/uploads/2020/04/%C3%81gua-Garrafa-PNG.png"
        product.name = "Agua"
        product.price = 10.00

        await AppDataSource.manager.save(product)
        console.log("Loading products from the database...")

        const products = await AppDataSource.manager.find(Product)
        console.log("Loaded products: ", products)

        const allPriceProducts = AppDataSource.manager.find(Product);
    }

    async function atualizaDados(){
        //Atualizar os produtos no banco de dados
        const productRepository = AppDataSource.getRepository(Product)
        const productToUpdate = await productRepository.findOneBy({
            id: 1,
        })
        productToUpdate.name = "Coca-cola Lata"
        productToUpdate.image = "https://www.imagensempng.com.br/wp-content/uploads/2022/01/2442.png"
        await productRepository.save(productToUpdate)
    }

    async function retornaDados(){
        // Retornar os produtos do banco de dados...
        const productRepository = AppDataSource.getRepository(Product)
        allProducts = await productRepository.find()
    }

    //cadastraDados();
    //atualizaDados();
    retornaDados();
    
    app.get('/api/products', (request : any, response : any) => {
        response.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        response.status(200).send(allProducts);
    });

    // Servidor
    const server = http.createServer(app);
    const port = 8080;
    server.listen(port, '0.0.0.0', () => console.log('O servidor está em execução http://localhost:8080/api/products'));

}).catch(error => console.log(error))