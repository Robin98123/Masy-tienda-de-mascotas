import React, { useState } from "react";
import "./header.css";
import logo from "../img/logo_masya.svg";
import { Link } from "react-router-dom";
import cart_h from "../icons/car_prices_header.svg";
import menu_icon from "../icons/menu_icon.svg";
import alt_arrow from "../icons/left-arrow-alt.svg";

export default function Header({
  productsInCart, total
}) {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="nav_var">
        <img src={logo} className="logo_marck" />
        <nav className="principal_menu">
          <ul>
            <li>
              <Link to="/Home" className="link_element">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/about" className="link_element">
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link to="/adopt" className="link_element">
                adopta
              </Link>
            </li>
            <li>
              <Link to="/blog" className="link_element">
                blog
              </Link>
            </li>
            <li>
              <Link to="/shop" className="shop_buttom">
                Tienda
              </Link>
            </li>
            <li className="car-button-list">
              <img
                src={cart_h}
                className="cart_icon"
                onClick={() => setActive(!active)}
              />{" "}
              <span className="conter-products">{productsInCart.length}</span>
              <div className="description_product-cart">
                <div
                  className={`cart_products-container ${
                    active ? "" : "hiden-cart"
                  }`}>

                      <div className="overlay-modal">
                        <div className="conten_modal-cart">

                            {productsInCart.map((product) => (
                                <>
                                <div
                                    className="content-productsInCart"
                                    key={product.id}>
                                    <h1>{product.quantity}</h1>
                                    <h1>{product.name}</h1>
                                    <h1>${product.price}</h1>
                                </div>
                                </>))}

                                <div>
                                    <h1>Total</h1>
                                </div>

                                <span className="total-pagar">${total}</span>
                                <button className="Clear-all-cart">vaciar carrito</button>

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

      <div className="menu_lateral">
        <label for="btn-menu" className="label_menu">
          <img src={menu_icon} className="button_menu-icon" />
        </label>
        <div className="car_icon_menu">
          <img src={cart_h} onClick={() => setActive(!active)} />
          <span className="conter-products">{productsInCart.length}</span>
        </div>
        <div className="description_product-cart">
          <div
            className={`cart_products-container ${active ? "" : "hiden-cart"}`}
          >
            <div className="overlay-modal">
              <div className="conten_modal-cart">
                <div className="content-productsInCart">
                  <h1>1</h1>
                  <h1>comida perro</h1>
                  <h1>$100</h1>
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
      </div>

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
    </>
  );
}
