import "../components/shop.css"
import ProductOff from "../components/ProductOff";
import Sections from "../components/Sections";
import Dogs from "../components/DogsSection"

const Shop = () =>{
    return (
        <div className="Shop-container">
        <ProductOff/>
        <Sections/>
        <Dogs/>
        </div>
    )
} 

export default Shop;