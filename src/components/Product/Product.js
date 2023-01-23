import React from 'react';
import './Product.css';



const Product = ({product}) => {
    const {price, name, image}= product;
    return (
        <div className='product'>
            <img src={image} alt=""/>
            <div>
                <p>{name}</p>
                <p>{price}</p>
                <button><p>Add To Cart</p></button>
            </div>
        </div>
    );
};

export default Product;