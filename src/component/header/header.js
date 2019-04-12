import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons/faShoppingCart";

class Header extends Component{
    render(){
        return(
            <div className="header">
                <h1>TTN MART</h1>
                <div className="cart-icon">
                    <FontAwesomeIcon icon={faShoppingCart}/>
                </div>
            </div>
        )
    }
}

export default Header;