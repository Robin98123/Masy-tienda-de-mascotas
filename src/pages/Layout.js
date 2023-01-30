import React, {useState} from "react";
import Routes from "./Routes";
import Header from "../components/Header";
import Footer from "../components/Footer";




const Layout = (allProducts) =>{
    const [productsInCart, setProductsInCart, ] = useState([]);
    const [allToProducts, setAllToProducts] = useState([]);
    console.log("products in layouts", productsInCart)
    return (
        <div>

            <Header productsInCart={productsInCart} 
            setProductsInCart={setProductsInCart}
            allToProducts={allToProducts} 
            setAllProducts={setAllToProducts}
            allProducts={allProducts}
            />

            <div><Routes 
            productsInCart={productsInCart} 
            setProductsInCart={setProductsInCart}
            allToProducts={allToProducts}
            setAllToProducts={allToProducts}
            /></div>

            <Footer/>

        </div>

        );
}

export default Layout;