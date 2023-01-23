import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const btnClicked =(clickedProduct)=>{
        console.log(clickedProduct.name);
        <h1>{clickedProduct.name}</h1>
    }
   
    return (
        <div className='shop-container'>
            {/* <h3>{product.name}</h3> */}
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        btnClicked={btnClicked}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
            <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;