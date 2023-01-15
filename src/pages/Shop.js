import "../components/shop.css"
import ProductOff from "../components/ProductOff";
import Sections from "../components/Sections";
import {data} from "../img/ProdutsCards/data";
import ProductCard from "../components/ProductCard";

const Shop = () =>{

    const products = data.map(product =>(
        <ProductCard key={product.id} {...product}/>
    ))

    return (
        <div className="Shop-container">
        <ProductOff/>
        <Sections/>
        <div> {products} </div>
        </div>
    )
} 

export default Shop;