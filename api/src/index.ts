import { Product } from "./entity/Product"
import { AppDataSource } from "./data-source"

AppDataSource.initialize().then(async () => {
    /*
    // cadastrar os produtos para o banco de dados...

    const product = new Product()
    product.image = "https://www.imagensempng.com.br/wp-content/uploads/2022/01/Coca-Cola-Lata-Png.png"
    product.name = "Agua"
    product.price = 4.00

    await AppDataSource.manager.save(product)
    console.log("Loading products from the database...")

    const products = await AppDataSource.manager.find(Product)
    console.log("Loaded products: ", products)

    const allPriceProducts = AppDataSource.manager.find(Product);*/


    
    // Retornar os produtos do banco de dados...

    const productRepository = AppDataSource.getRepository(Product)
    const allProducts = await productRepository.find()
    console.log("All products from the db: ", allProducts)


    /*
    const firstProduct = await productRepository.findOneBy({
        id: 1,
    })
    console.log("First product from the db: ", firstProduct)

    const productsAgua = await productRepository.findOneBy({
        name: "Agua",
    })
    console.log("Me products = Agua from the db: ", productsAgua)

    const allViewedProducts = await productRepository.findBy({ price: 4 })
    console.log("All products from price for R$4,00 from the db : ", allViewedProducts)

    const [product, productsCount] = await productRepository.findAndCount()
    console.log("All products: ", product)
    console.log("Products count: ", productsCount)
    */

    /*
    //Atualizar os produtos no banco de dados
    const productRepository = AppDataSource.getRepository(Product)
    const productToUpdate = await productRepository.findOneBy({
        id: 1,
    })
    productToUpdate.name = "teste nome alterado!!"
    await productRepository.save(productToUpdate)
    */

}).catch(error => console.log(error))
