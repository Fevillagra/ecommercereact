import React from 'react';
import './CartWidget.css';

function CartWidget() {
    return (
        <div className="cartwidget__cart-container">
            <i className="fa-solid fa-cart-shopping"></i>
            <p className="cartwidget__cart-container--p">0</p>
        </div>     
    )
};

export default CartWidget;
