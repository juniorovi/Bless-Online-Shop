import React from 'react';
import './Cart.css'

const Cart = ({ datum }) => {
    return (
        <div className='cart'>
            <h3>Cart Container</h3>
            <div className='cartInfo'>
                <img src={datum.image} alt="" />
                <h4>{datum.name}</h4>
                {/* {
                    data.forEach(d => {
                        console.log(d.image);
                        <img src={d.image} alt='Here is a product' />;
                        <h4>{d.name}</h4>
                    }
                    )
                } */}
                {/* <h3>{data.length} times clicked</h3>
                <img src={data.image} alt="" /> */}

            </div>
        </div>
    );
};

export default Cart;