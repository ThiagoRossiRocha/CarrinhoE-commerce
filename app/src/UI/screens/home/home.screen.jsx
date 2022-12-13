import { useEffect, useState } from "react"
import { Products } from "../../components/products/products.components"
import "./home.style.css"

export const Home = ()=>{

    const [products, setProducts] = useState([]) 
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        fetch('http://localhost:8080/api/products')
            .then((response) => response.json() )
            .then((response) => setProducts(response))
            .catch((error) => alert("A aplicação apresentou um erro!!\nErro: " + error.message));
    }, [])

    const handleProducts = (info)=>{
        setCart([
            ...cart, info
        ])
        setTotal(total+info.price)
    }

    return(
        <div className="home">
            <div className="home__products">
                {
                    products?.map((product, index)=>{
                        return (<Products key={index} info = {product} handleProducts = {handleProducts}/>);
                    })
                }
            </div>

            <div className="home__cart">
                <h3>Carrinho de Compras</h3>
                <div className="home__cart-products">
                    {
                        cart?.map((product, index)=>{
                            return (<Products key={index} info = {product} isCart/>);
                        })
                    }
                </div>
                <h4>Total:{total}</h4>
            </div>            
        </div>
    )
}