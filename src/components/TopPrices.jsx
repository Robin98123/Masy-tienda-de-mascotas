import React from "react";
import "../components/topprices.css"
import ProductOff from "./ProductOff";

export default function TopPrices (){
    return(
        <><div className="filters">
            <h1>Ofertas</h1>
            <h1>Nuevos productos</h1>
            <h1>Los más vendidos</h1>
        </div>
            <ProductOff />
            </>
    )
}