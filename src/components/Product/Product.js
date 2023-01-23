import React from 'react';
import './Product.css';



const Product = ({product, btnClicked}) => {
    const {price, name, image}= product;
    
    return (
        <div className='product'>
            
            <img src={image} alt=""/>
            <div>
                <p>{name}</p>
                <p>{price} </p>
                <button onClick={()=>btnClicked(product)}><p>Add To Cart</p></button>
            </div>
        </div>
    );
};

export default Product;