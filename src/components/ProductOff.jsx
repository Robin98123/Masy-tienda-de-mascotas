import React from "react";
import "./productoff.css"
import product_image_1 from "../img/ofertas/ofertas_1.png"

export default function ProductOff (){
    return(
        <div className="product_container">
            <div className="product_cointainter-off">
                -10%
            </div>
            <div>
            <img src={product_image_1} />
            </div>
            <div>
                <h1>Ganador premium- cachorro x 4kg</h1>
            
                <h2>$78.000</h2>
                <h3>$70.200</h3>
                <button></button>
            </div>

        </div>
    )
}