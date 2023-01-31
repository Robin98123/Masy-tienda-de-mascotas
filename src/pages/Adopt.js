import React from "react";
import banneradop from "../img/anuncios/BANNER-ADOPCION.png"
import dog_image from "../img/anuncios/perro_sobre_nosotros.png"
import "./adopt.css"

const Adopt = () =>{
    return (
        
        <div className="container_adopt">
        <div className="img_banner">
        <img src={banneradop} />
        </div>
        <div className="adop-main">
            <p>Adoptar a un perro o gato implica tomar una gran decisión <br/>
y responsabilidad, debes tener en cuenta que el perro <br/>
 requiere tiempo, por lo tanto es importante que tengas <br/>
 claridad sobre la disponibilidad que tengas de este <br/>

 Él no solo necesita compañía, sino actividad física diaria  <br/>
(La falta de ejercicio físico es una de las principales razones <br/>
 por las que los perros presentan problemas de conducta) <br/>
De igual forma, requiere paciencia y compromiso en el <br/>
proceso de educación, así como dinero mensual para cubrir <br/>
 los costos asociados a su alimentación, atención veterinaria, <br/> 
guardería (en época de vacaciones) y todos los cuidados <br/>
que requiere durante un período de tiempo que puede ser <br/>
 de 15 años ó más, adoptar un animal de compañía puede <br/>
 ser gratificante, pero solo si estas completamente seguro <br/>
y convencido de todo lo que implicara para ti adoptar <br/>
un compañero</p>
    <img src={dog_image}/>
        </div>
        </div>
    )
} 

export default Adopt;