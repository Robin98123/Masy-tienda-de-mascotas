import ProductOff from "../components/ProductOff";
import ProductCard from "../ProductCard";
import todos from "../icons/todos_icon.svg"
import perros from "../icons/perros_icon.svg";
import gatos from "../icons/gatos_icon.svg";
import aves from "../icons/aves_icon.svg";
import peces from "../icons/peces_icon.svg";
import otros from "../icons/otros_icon.svg";
import "./shop.css";



const Shop = ({allProducts, setAllProducts, total, setTotal, countProducts, setCountProducts}) =>{

    return (
        <>
        <div className="Shop-container">
        <ProductOff/>
        <div className="sections">
            <button><img src={todos} className="todos"></img>
                <h1>todos</h1> 
                    <h2>51 items</h2></button>
            <button><img src={perros} className="perros"></img>
                <h1>Perros</h1> 
                    <h2>18 items</h2></button>
            <button><img src={gatos} className="gatos"></img>
                <h1>Gatos</h1> 
                    <h2>12 items</h2></button>
            <button><img src={aves} className="aves"></img>
                <h1>Aves</h1> 
                    <h2>5 items</h2></button>
            <button><img src={peces} className="peces"></img>
                <h1>Peces y Acuarios</h1> 
                    <h2>5 items</h2></button>
            <button ><img src={otros} className="otros"></img>
                <h1>Otros</h1> 
                    <h2>8 items</h2></button>
        </div>
        <div className="tarjetas_prueba">
        <ProductCard className="productcard"

        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}

        />
        </div>
        </div>

        </>
    )
};

export default Shop;