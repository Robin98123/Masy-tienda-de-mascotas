import React, { useState } from "react";
import "./header.css";
import logo from "../img/logo_masya.svg";
import { Link } from "react-router-dom";
import cart_h from "../icons/car_prices_header.svg";
import menu_icon from "../icons/menu_icon.svg";
import alt_arrow from "../icons/left-arrow-alt.svg";
import ReactWhatsapp from "react-whatsapp";

export default function Header({allProducts, setAllProducts, total, countProducts, setCountProducts, setTotal}) {
  //se define una cosntante para darle dos estados al carrito en booleano
  const [active, setActive] = useState(false);

  const onDeleteProduct = product => {
		const results = allProducts.filter(
			item => item.id !== product.id);

      setTotal(total - product.price * product.quantity);
		  setCountProducts(countProducts - product.quantity);
      setAllProducts(results);

    };

    const onCleanCart = () => {
      setAllProducts([]);
      setTotal(0);
      setCountProducts(0);

    };

  return (
    //Menu principal
    <>
      <div className="nav_var">
        <img src={logo} className="logo_marck" />
        <nav className="principal_menu">
          <ul>
            <li className="link_home">
              <Link to="/Home" className="link_element">
                Inicio
              </Link>
            </li>
            <li className="link_about">
              <Link to="/about" className="link_element">
                Sobre nosotros
              </Link>
            </li>
            <li className="link_adopt">
              <Link to="/adopt" className="link_element">
                adopta
              </Link>
            </li>
            <li className="link_blog">
              <Link to="/blog" className="link_element">
                blog
              </Link>
            </li>
            <li className="link_shop">
              <Link to="/shop" className="shop_buttom">
                Tienda
              </Link>
            </li>
            <li className="car-button-list">

      
      <div className="cartAndMenuLateral">

            <div className="menu_lateral">
        <label for="btn-menu" className="label_menu">
          <img src={menu_icon} className="button_menu-icon" />
        </label>
      <input type="checkbox" id="btn-menu" />
      <div className="container-menu">
        <div className="cont-menu">
          <nav className="lateral_menu">
            <ul>
              <li>
                <Link to="/Home" className="link_element_lateral">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className="link_element_lateral">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link to="/adopt" className="link_element_lateral">
                  adopta
                </Link>
              </li>
              <li>
                <Link to="/blog" className="link_element_lateral">
                  blog
                </Link>
              </li>
              <li>
                <Link to="/shop" className="shop_buttom_lateral">
                  Tienda
                </Link>
              </li>
            </ul>
          </nav>
          <label for="btn-menu" className="icon_equis">
            x
          </label>
        </div>
      </div>
    </div>

              <img
                src={cart_h}
                className="cart_icon"
                onClick={() => setActive(!active)}
              />{" "}
              <span className="conter-products">{countProducts}</span>
              <div className="description_product-cart">



                <div
                //esta propiedad hace que se puede ocutal y desocultar el carrito de nuevo
                  className={`cart_products-container ${
                    active ? "" : "hiden-cart"
                  }`}>

                
                      <div className="overlay-modal">
                        <div className="conten_modal-cart">

                                {
                                  allProducts.length ? (
                                    <>
                          
                                    <div
                                    //mapeamos products in cart y ponemos la key de entrada llaamando desde el id del data
                                    //rellenamos campos para que se muestren en el carrito desde data, pasados por el boton 
                                    //que esta funcionando en product in cart
                                        className="content-productsInCart">
                                          {allProducts.map(product => (
                                            <div className="cointainer_mapproduct" key={product.id}>
                                              <div className="container-products_incart">
                                                  <h1>{product.quantity}</h1>
                                                  <h1>{product.name}</h1>
                                                  <h1>${product.price}</h1>
                                                </div>
                                                <div className="button-deleteandagree">
                                                  <button onClick={()=> onDeleteProduct(product)}>x</button>
                                                </div>
                                              
                                          </div>
                                          ))}

                                      </div>
                                          

                                    <div>
                                    <h1>Total</h1>
                                </div>

                                <span className="total-pagar">${total}</span>
                                <button className="clearcart-button"onClick={onCleanCart}>vaciar carrito</button>
                                <ReactWhatsapp className="Wahtsapp-react"
                                number="57-300-289-1319"  message={`¡Hola! gracias por comprar en Masyá, tu total es de:  
                                ${total} corresponde a los siguientes productos ${countProducts}`}
                                >
                                <button className="whstapp-button">realizar tu compra</button>
                                </ReactWhatsapp>

                                    </>
                                  ) : (<p className='cart-empty'>El carrito está vacío</p>)
                                }
                                
      </div>		                    
					

                                <button
                    className="close_modal"
                    onClick={() => setActive(!active)}
                  >
                    <img src={alt_arrow} />
                  </button>
                            </div>
                            </div>

                  
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
)};
