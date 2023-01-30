import React from 'react';
import './Cart.css'

const Cart = ({ data }) => {
    return (
        <div className='cart'>
            <h3>Cart Container</h3>
            {
                data.map(item => {
                    return(
                    <div className='cartInfo'>
                        <img src={item.image} alt="" />
                        <h4>{item.name}</h4>
                        
                    </div>
                    )
                })
            }
            
        </div>
    );
};

export default Cart;