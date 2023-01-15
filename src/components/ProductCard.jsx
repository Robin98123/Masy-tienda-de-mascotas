import React from "react";
import "../components/productcard.css"
import car_icon from "../icons/car_prices.svg"

const ProductCard = ({ name, price, img }) => {
    return(

        <div className="container_product">
        <div className="product_container">
            <div className="image_prodcut">
            <img src={'/../img/sections/dogs${img}'}/>
            </div>
            <div className="price_continer">
                <h1>{name}</h1>  
                <div className="price_description">  
                    <div className="price_cash">
                    <h3>{price}</h3>
                    </div> 
                <button className="car_button"><img src={car_icon}/></button>
                </div> 
            </div>
        </div>
        </div>

    )
};

export default ProductCard;