import React from "react";
import "./otherproducts.css"

export default function OtherProducts (){
    return(
        <div className="container_othersproducts">
            <h1>Descubre otros productos</h1>
            <div className="images_otherproducts">
                <div className="block_banner-1">
                <div className="banner-1"> 
                <h2>Accesorios <br></br> para gatos</h2>
                <h3>Explorar >> </h3>
                </div>
                <div className="banner-2">
                <h2>Supementos <br></br> animales</h2>
                <h3>Explorar >> </h3>
                </div>
                </div>

                <div className="block_banner-2">
                <div className="banner-3">
                <h2>Aseo para <br></br> tus mascotas </h2>
                <h3>Explorar >> </h3>
                </div>
                <div className="banner-4">
                <h2>Diversión <br></br> Máscotas </h2>
                <h3>Explorar >> </h3>
                </div>
                </div>
            </div>
        </div>
    )
}