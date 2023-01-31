import React from "react";
import "./footer.css"
import logo_svg from "../img/logo_masya_usolibre.svg"
import tiktok from "../icons/tiktok_icon.svg"
import instagram from "../icons/instagram_icon.svg"
import whatsapp from "../icons/whatsapp_icon.svg"
import youtube from "../icons/youtube_icon.svg"
import medios_pago from "../icons/medios_pago.png"
import { Routes } from "react-router-dom"


export default function Footer (){
    return(
    <><div className="footer_var">
    <div className="contener_1">
    <img src={logo_svg} className="logo_marca"/>
    <h5>Zipaquirá, COL<br></br>
Cra 36 # 28-35 Santa Isabel</h5>
        <ul className="social_media">
            <li><button> <img src={tiktok} alt="tiktok button"/></button></li>
            <li><button><img src={instagram} alt="tiktok button"/></button></li>
            <li><button><img src={whatsapp} alt="tiktok button"/></button></li>
            <li><button><img src={youtube} alt="tiktok button" className="youtube_icon"/></button></li>
        </ul>
    </div>
            <ul className="section_footer">
                <li className="title_section-footer">Productos </li>
                <li>Perros</li>
                <li>Gatos</li>
                <li>Aves</li>
                <li>Peces y acuarios</li>
                <li>Otros</li>
            </ul>

            <ul className="section_footer">
                <li className="title_section-footer">Información</li>
                <li>Política de datos</li>
                <li>FAQ</li>
                <li>Contáctanos</li>
            </ul>

            <div className="image_pay">
                <h5>Medios de pago</h5>
                <img src={medios_pago} alt="medios de pago" className="medios_de_pago"/>
            </div>
    </div>
    </>
    )
}