import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {
    const { name, img, stock, price, seller } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="single-product">
            <img src={img} alt="" />
            <div className="product-content">
                <h4 className="product-title">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={() => props.handleAddToCart(props.product)} className="product-btn">{cartIcon} add to cart</button>
            </div>
        </div>
    );
};

export default Product;