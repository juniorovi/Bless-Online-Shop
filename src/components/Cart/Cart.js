import React from 'react';
import './Cart.css'

const Cart = (props) => {
    return (
        <div className='cart'>
            <h3>Cart Container</h3>
            <div className='cartInfo'>
                <img src={props.data.image} alt="" />
                <h4>{props.data.name}</h4>
            </div>
        </div>
    );
};

export default Cart;