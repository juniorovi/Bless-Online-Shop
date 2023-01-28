import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [data, setData]= useState('');
    const storedData =[];

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    
    const btnClicked = (data) => {
        storedData.push(setData(data));
        
        console.log(typeof(storedData));
        
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
            <Cart btnClicked={btnClicked} storedData={data}></Cart>
            
            
        </div>
    );
};

export default Shop;