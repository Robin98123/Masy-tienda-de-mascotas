import React from "react";
import "../components/productcard.css"
import car_icon from "../icons/car_prices.svg"


const ProductCard = (props, allToProducts, setAllToProducts ) => {
    const {id, name, price, img }= props.product;

    const setProductsInCart = props.setProductsInCart;

    const productsInCart= props.productsInCart;

    const product = props.product;
    
    const onAddProduct = (item) => {
      setProductsInCart([...productsInCart, item]);
    };
    
    return(
        <div className="styles_product-card">
            <div className="container_product">
            <div className="product_container">
                <div className="image_prodcut">
                <img src={img}/>
                </div>
                <div className="price_continer">
                    <h1>{name}</h1>  
                    <div className="price_description">  
                        <div className="price_cash">
                        <h3>$ {price}</h3>
                        </div> 
                    <button className="car_button"><img src={car_icon} onClick ={()=> {onAddProduct (product)}}/></button>
                    </div> 
                </div>
            </div>
            </div>
        </div>

    )
};

export default ProductCard;