import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {

    const firstTwenty = fakeData.slice(0, 20);
    const [products, setProducts] = useState(firstTwenty);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCard = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        });
        setCart(previousCard);
    }, [])

    const handleAddProduct = (product) => {
        const sameProduct = cart.find(pd => pd.key === product.key);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== product.key);
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className="d-flex">
            <div className="w-75 ml-5 mr-5">
                {
                    products.map(product => <Product product={product} key={product.key} handleAddProduct={handleAddProduct} showButton={true}></Product>)
                }
            </div>
            <div>
                <Cart cart={cart}>
                    <Link to='/review'>
                        <button className="main-button btn-block"> <FontAwesomeIcon icon={faPaperclip} /> Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;