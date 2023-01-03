import React from "react";
import "./anuncies.css"
import anuncio1 from "../img/anuncios/anuncio1.jpg"
import anuncio2 from "../img/anuncios/anuncio2.jpg"
import anuncio3 from "../img/anuncios/anuncio3.jpg"

export default function Anuncies (){
    return(
        <div className="container_anuncies">
            <h1>Anuncios de Interés</h1>
        <div className="images_anuncies">
            <div className="images_anuncies-1">
            <img src={anuncio1} alt="anuncio 1" />
            </div>
            <div className="images_anuncies-2">
            <img src={anuncio2} alt="anuncio 1" />
            <img src={anuncio3} alt="anuncio 1" />
            </div>
        </div>
        </div>
    )
}