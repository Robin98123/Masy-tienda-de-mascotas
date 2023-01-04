import React from "react";
import "./coments.css"
import dog from "../img/comentarios/banner_comentarios_principal.png"
import tarjeta1 from "../img/comentarios/tarjeta-1.png"
import tarjeta2 from "../img/comentarios/tarjeta-2.png"
import logo1 from "../img/patrocinadores/logo_1.png"
import logo2 from "../img/patrocinadores/logo_2.png"
import logo3 from "../img/patrocinadores/logo_3.png"
import logo4 from "../img/patrocinadores/logo_4.png"
import logo5 from "../img/patrocinadores/logo_5.png"
import logo6 from "../img/patrocinadores/logo_6.png"



export default function Coments (){
    return(
       <> <div className="coments-contenedor">
            <div className="child_coments-contenedor">
            <img src={dog} alt="perro comentarios" className="perro"/>
            <img src={tarjeta1} alt="comentario 1" className="tarjeta-1"/>
            <img src={tarjeta2} alt="comentario 2" className="tarjeta-2"/>
            </div>
        </div>
        <div className="patrocinators-contenedor">
            <div className="child_patrocinators-contenedor">
                <img src={logo1} alt="logo pedegree" id="logo1"/>
                <img src={logo2}  alt="logo piruna" id="logo2"/>
                <img src={logo3}  alt="logo nutrecan" id="logo3"/>
                <img src={logo4}  alt="logo megavet" id="logo4"/>
                <img src={logo5}  alt="logo petsages" id="logo5"/>
                <img src={logo6}  alt="logo beco" id="logo6"/>
            </div>
        </div>
        </>
    )
}