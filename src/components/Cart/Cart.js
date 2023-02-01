import React from 'react';
import './Cart.css'

const Cart = ({ data, luckyBtn }) => {
    return (
        <div className='cart'>
            <h3>Cart Container</h3>
            {
                data.map(item => {
                    return(
                    <div className='cartInfo'>
                        <img src={item.image} alt="" />
                        <p>{item.name}</p>
                    </div>
                    )
                })
            }
            <button onClick={()=>luckyBtn()} className="luckyBtn"><p>Chose Lucky One</p></button>
        </div>
    );
};

export default Cart;