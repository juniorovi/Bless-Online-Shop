import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = ({ product, btnClicked }) => {
    const { name, image } = product;
    return (
        <div>
            <div className='product'>
                <img src={image} alt="" />
                <div className='productInfo'>
                    <p>{name}</p>
                    <button onClick={() => btnClicked(product)} className='btnCart'>
                        <p>Add To Cart</p>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;