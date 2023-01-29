import React, { useState, useEffect } from "react";
import products from "../img/ProdutsCards/data";
import ProductOff from "../components/ProductOff";
import ProductCard from "../components/ProductCard";
import todos from "../icons/todos_icon.svg"
import perros from "../icons/perros_icon.svg";
import gatos from "../icons/gatos_icon.svg";
import aves from "../icons/aves_icon.svg";
import peces from "../icons/peces_icon.svg";
import otros from "../icons/otros_icon.svg";
import "./shop.css";



const Shop = ({productsInCart, setProductsInCart}) =>{

    const [category, setCategory] = useState("ALL");

    const [allProducts, setAllProducts] = useState
    (products);


    useEffect(() =>{
        if (category === "ALL"){
            setAllProducts(products);
        }

        if (category === "PERROS"){
        const filteredProducts = products.filter(
            (item)=> item.category === "dogs"
        );

        setAllProducts(filteredProducts);
        }

        if (category === "GATOS"){
            const filteredProducts = products.filter(
                (item)=> item.category === "cats"
            );
    
            setAllProducts(filteredProducts);
        }

        
        if (category === "AVES"){
            const filteredProducts = products.filter(
                (item)=> item.category === "birds"
            );
    
            setAllProducts(filteredProducts);
        }

        if (category === "PECES"){
            const filteredProducts = products.filter(
                (item)=> item.category === "fish"
            );
    
            setAllProducts(filteredProducts);
        }

        if (category === "OTROS"){
            const filteredProducts = products.filter(
                (item)=> item.category === "others"
            );
    
            setAllProducts(filteredProducts);
        }

    }, [category]);

    // const products_card = products.map(product =>(
    //     <ProductCard key={product.id} {...product}/>
    // ))


    return (
        <>
        <div className="Shop-container">
        <ProductOff/>
        <div className="sections">
            <button onClick={()=> setCategory("ALL")}><img src={todos} className={`todos ${
                category === "ALL" ? "todos" : ""
            }`}></img>
                <h1>todos</h1> 
                    <h2>51 items</h2></button>
            <button onClick={()=> setCategory("PERROS")}><img src={perros} className="perros"></img>
                <h1>Perros</h1> 
                    <h2>18 items</h2></button>
            <button onClick={()=> setCategory("GATOS")}><img src={gatos} className="gatos"></img>
                <h1>Gatos</h1> 
                    <h2>12 items</h2></button>
            <button onClick={()=> setCategory("AVES")}><img src={aves} className="aves"></img>
                <h1>Aves</h1> 
                    <h2>5 items</h2></button>
            <button onClick={()=> setCategory("PECES")}><img src={peces} className="peces"></img>
                <h1>Peces y Acuarios</h1> 
                    <h2>5 items</h2></button>
            <button onClick={()=> setCategory("OTROS")}><img src={otros} className="otros"></img>
                <h1>Otros</h1> 
                    <h2>8 items</h2></button>
        </div>
        <div className="tarjetas_prueba">
        {allProducts.map (product =>(
            <ProductCard  key={product.id}  product={product} setProductsInCart={setProductsInCart} productsInCart={productsInCart} className="productcard"/>
            ))} 
        </div>
        </div>

        </>
    )
} 

export default Shop;