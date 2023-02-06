import { data } from "./data";
import "./components/productcard.css"
import car_icon from "./icons/car_prices.svg"



const ProductCard = ({allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal }) => {

    const onAddProduct = product => {

        if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
            setTotal(total + product.price * product.quantity);
            setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}
        
        setTotal(total + product.price * product.quantity);
        setCountProducts(countProducts + product.quantity);
        setAllProducts([...allProducts, product]);
    };
    
    
    return(
        <div className="grid-colums">
        <div className="styles_product-card">
            {data.map(product => (
            <div className="product_container" key={product.id}>
                <div className="image_prodcut">
                <img src={product.img}/>
                </div>
                <div className="price_continer">
                    <h1>{product.name}</h1>  
                    <div className="price_description">  
                        <div className="price_cash">
                        <h3>$ {product.price}</h3>
                        </div> 
                    <button className="car_button" onClick={() => onAddProduct(product)}><img src={car_icon}/></button>
                    </div> 
                </div>
            </div>
            ))};
        </div>
        </div>
    )
};

export default ProductCard;
