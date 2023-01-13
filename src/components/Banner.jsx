import React from "react";
import './banner.css'
import { Link } from "react-router-dom"

export default function Footer (){
    return(
        <div className="image_banner">
            <div className="main_text">
            <h1 className="banner_tittle-1">Para tus amigos quieres cosas <br></br>
                buenas, pero pára</h1>
            <h2 className="banner_tittle-2"> tu mejor amigo </h2>
            <h2 className="banner_tittle-3">¡La mayor calidad!</h2>
            <Link to="/shop" className="ir_tienda">Ir a la tienda</Link>
            </div>
        </div>
    )
}
