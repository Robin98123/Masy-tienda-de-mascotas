import React, { Fragment } from "react"
import "./header.css"
import logo from "../img/logo_masya.svg"
import { Link } from "react-router-dom"
import cart_h from "../icons/car_prices_header.svg"
import menu_icon from "../icons/menu_icon.svg"


export default function Header (){
    return(
    <><div className="nav_var">
    <img src={logo} className="logo_marck"/>
    <nav className="principal_menu">
            <ul>
                <li><Link to="/Home" className="link_element">Inicio</Link></li>
                <li><Link to="/about" className="link_element">Sobre nosotros</Link></li>
                <li><Link to="/adopt" className="link_element">adopta</Link></li>
                <li><Link to="/blog" className="link_element">blog</Link></li>
                <li><Link to="/shop" className="shop_buttom">Tienda</Link></li>  
                <li><img src={cart_h} className="cart_icon"/></li>
            </ul>
        </nav>
    
    <div className="menu_lateral">
        <label for="btn-menu" className="label_menu"><img src={menu_icon} className="button_menu-icon"/></label>
        <div className="car_icon_menu"><img src={cart_h}/></div>
    </div>
    <input type="checkbox" id="btn-menu"/>
    <div className="container-menu">
        <div className="cont-menu">
        <nav className="lateral_menu">
            <ul>
                <li><Link to="/Home" className="link_element_lateral">Inicio</Link></li>
                <li><Link to="/about" className="link_element_lateral">Sobre nosotros</Link></li>
                <li><Link to="/adopt" className="link_element_lateral">adopta</Link></li>
                <li><Link to="/blog" className="link_element_lateral">blog</Link></li>
                <li><Link to="/shop" className="shop_buttom_lateral">Tienda</Link></li>  
            </ul>
        </nav>
        <label for="btn-menu" className="icon_equis">x</label>
        </div>
    </div>
    </div>
    </>
    )
} 