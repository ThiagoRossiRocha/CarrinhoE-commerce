import "./products.style.css"

export const Products = ({info, handleProducts, isCart})=>{
    return(
        <div className = "products">
            <img className = "products__image" src={info.image} alt={`Imagem de ${info.name}`}/>
            <p className = "products__name">{info.name}</p>
            <p className = "products__price">{info.price}</p>
            {
                !isCart && <button className = "products__button" onClick={()=>handleProducts(info)}>Adicionar</button>
            }
        </div>
    )
};