import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props)
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
        const fixnotation = parseFloat(total.toFixed(2))
        total = fixnotation;
    }
    return (
        <div>
            <div className="order-title">
                <h2>Order Summary</h2>
                <p>Items ordered: {props.cart.length}</p>
            </div>
            <p>Items: {total}</p>
        </div>
    );
};

export default Cart;