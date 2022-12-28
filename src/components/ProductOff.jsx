import React from "react";
import "./productoff.css"
import product_image_1 from "../img/ofertas/ofertas_1.png"
import car_icon from "../icons/car_prices.svg"

export default function ProductOff (){
    return(
        <div className="product_container">
            <div className="product_cointainter-off">
                -10%
            </div>
            <div className="image_prodcut">
            <img src={product_image_1} />
            </div>
            <div className="price_continer">
                <h1>Ganador premium- cachorro x 4kg</h1>  
                <div className="price_description">  
                    <div className="price_cash">     
                    <h2>$78,000</h2>
                    <h3>$70,200</h3>
                    </div> 
                <button className="car_button"><img src={car_icon}/></button>
                </div> 
            </div>

        </div>
    )
}