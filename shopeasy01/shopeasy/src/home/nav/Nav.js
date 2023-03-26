import React from "react";
import logo from "../../images/logo.svg";
import cart from "../../images/cart.svg";
import "./Nav.css";
const Nav = () => {
  return (
      <header>
        <nav className="nav">
          <div className="navflex">
            <img className="logo" src={logo} alt="img not found" />
          </div>
          
          <div className="links">
            <li>
              <a className="link" href="#home">
                HOME
              </a>
            </li>
            <li>
              <a className="link" href="#home">
                ABOUT
              </a>
            </li>
            <li>
              <a className="link" href="#home">
                PRODUCT
              </a>
            </li>
            <li>
              <a className="link" href="#home">
                CONTACT
              </a>
            </li>
            <li>
              <img className="cart" src={cart} alt="no img found" />
            </li>
          </div>
        </nav>
      </header>
  );
};

export default Nav;
