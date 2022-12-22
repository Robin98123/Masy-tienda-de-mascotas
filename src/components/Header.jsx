import React, { Fragment } from "react"
import "./header.css"
import logo from "../img/logo_masya.svg"

export default function Header (){
    return(
    <><div className="nav_var">
    <img src={logo} className="logo_marck"/>
    <nav>
            <ul>
                <li>Inicio</li>
                <li>Sobre nosotros</li>
                <li>adopta</li>
                <li>blog</li>
                <li><button>Tienda</button></li>
            </ul>
        </nav>
    </div>
    </>
    )
} 