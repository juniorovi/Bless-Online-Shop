import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [data, setData]= useState([]);
    
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const btnClicked = (product) => {
        const newData =[...data, product];
        if(newData.length >=5){
            return alert("Cart is full")
        }
        setData(newData);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        btnClicked={btnClicked}
                    ></Product>)
                }
            </div>
            <Cart data={data}></Cart>
            {/* {
                data.map(datum=><Cart
                datum ={datum}
                ></Cart>)
            } */}
        </div>
    );
};

export default Shop;