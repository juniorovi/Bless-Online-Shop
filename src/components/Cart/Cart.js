import React from 'react';
import './Cart.css'

const Cart = (props) => {
    return (
            <div className='cart'>
                <h3>Cart Container</h3>
                <h4>{props.data.name}</h4>
            </div>
    );
};

export default Cart;