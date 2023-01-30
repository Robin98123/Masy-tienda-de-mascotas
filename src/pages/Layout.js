import React, {useState} from "react";
import Routes from "./Routes";
import Header from "../components/Header";
import Footer from "../components/Footer";




const Layout = () =>{
    const [productsInCart, setProductsInCart] = useState([]);
    console.log("products in layouts", productsInCart)
    return (
        <div>

            <Header productsInCart={productsInCart} 
            setProductsInCart={setProductsInCart}/>

            <div><Routes productsInCart={productsInCart} setProductsInCart={setProductsInCart}/></div>

            <Footer/>

        </div>

        );
}

export default Layout;