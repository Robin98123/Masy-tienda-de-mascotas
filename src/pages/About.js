import React from "react";
import "./about.css"
import banner_about from "../img/anuncios/banner-about.svg"

const About = () =>{
    return (
        <>
        <div className="welcome_tittle"> Hola! Masyá te da la Bienvenida</div>
        <div className="containt_main">
        <h1>Lo mejor para tu mascota</h1>
        <div className="about_main">
        <img src={banner_about}></img>
        <p>Hemos creado Masyá solo para ti, apasionados por los animales <br/>
            conocemos de primera mano que encontrar productos de buena calidad <br/>
            y con precios accequibles es muy dificil, hoy en dia, por eso mas yá te <br/> 
            brinda esta opción que te permitirá desde la comodidad de tu casa <br/>
            el encontrar productos, junto a un asesoramiento de epertos veterinarios <br/>
            que te guiarán y te acompñaran para que estés totalmente <br/>
            satrisfecho y tus mascotas muy felices <br/>
        </p>
        </div>
        </div>
        </>
    )
} 

export default About;