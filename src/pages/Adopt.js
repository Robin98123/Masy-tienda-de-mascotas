import React from "react";
import banneradop from "../img/anuncios/BANNER-ADOPCION.png"
import dog_image from "../img/anuncios/perro_sobre_nosotros.png"
import "./adopt.css"

const Adopt = () =>{
    return (
        <>
        <div className="img_banner">
        <img src={banneradop} />
        </div>
        <div>
            <p>Adoptar a un perro o gato implica tomar una gran decisión 
y responsabilidad. Debes tener en cuenta que el perro
 requiere tiempo, por lo tanto es importante que tengas
 claridad sobre la disponibilidad que tengas de este.

 Él no solo necesita compañía, sino actividad física diaria 
(La falta de ejercicio físico es una de las principales razones
 por las que los perros presentan problemas de conducta).
De igual forma, requiere paciencia y compromiso en el 
proceso de educación, así como dinero mensual para cubrir
 los costos asociados a su alimentación, atención veterinaria, 
guardería (en época de vacaciones) y todos los cuidados 
que requiere durante un período de tiempo que puede ser
 de 15 años ó más. Adoptar un animal de compañía puede
 ser gratificante, pero solo si estas completamente seguro 
y convencido de todo lo que implicara para ti adoptar 
un compañero.</p>
    <img src={dog_image}/>
        </div>
        </>
    )
} 

export default Adopt;