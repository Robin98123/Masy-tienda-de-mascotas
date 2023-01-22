import React, { Fragment } from "react"
import "./header.css"
import logo from "../img/logo_masya.svg"
import { Link } from "react-router-dom"
import cart_h from "../icons/car_prices_header.svg"

export default function Header (){
    return(
    <><div className="nav_var">
    <img src={logo} className="logo_marck"/>
    <nav>
            <ul>
                <li><Link to="/Home" className="link_element">Inicio</Link></li>
                <li><Link to="/about" className="link_element">Sobre nosotros</Link></li>
                <li><Link to="/adopt" className="link_element">adopta</Link></li>
                <li><Link to="/blog" className="link_element">blog</Link></li>
                <li><Link to="/shop" className="shop_buttom">Tienda</Link></li>
                <li><img src={cart_h} className="cart_icon"/></li>
            </ul>
        </nav>
    </div>
    </>
    )
} 