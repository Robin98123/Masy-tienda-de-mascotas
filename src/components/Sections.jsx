import React from "react";
import "./sections.css";
import perros from "../icons/perros_icon.svg"
import gatos from "../icons/gatos_icon.svg"
import aves from "../icons/aves_icon.svg"
import peces from "../icons/peces_icon.svg"
import otros from "../icons/otros_icon.svg"

export default function Sections (){
    return(
        <div className="sections">
            <button><img src={perros} className="perros"></img>
                <h1>Perros</h1> 
                    <h2>18 items</h2></button>
            <button><img src={gatos} className="gatos"></img>
                <h1>Gatos</h1> 
                    <h2>12 items</h2></button>
            <button><img src={aves} className="aves"></img>
                <h1>Aves</h1> 
                    <h2>5 items</h2></button>
            <button><img src={peces} className="peces"></img>
                <h1>Peces y Acuarios</h1> 
                    <h2>5 items</h2></button>
            <button><img src={otros} className="otros"></img>
                <h1>Otros</h1> 
                    <h2>8 items</h2></button>
        </div>
    )
}
