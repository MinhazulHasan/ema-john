import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImg from '../../images/giphy.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, [])

    let thankYou;
    if (orderPlaced) {
        thankYou = <img className='img-thumbnail img rounded mt-3' src={happyImg} alt="Not found" />
    }

    return (
        <div className="d-flex">
            <div className="w-75 ml-5 mr-5">
                {
                    cart.map(pd => <ReviewItem product={pd} key={pd.key} removeProduct={removeProduct}></ReviewItem>)
                }
                {
                    thankYou
                }
            </div>
            <div className="ml-5 mr-5">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="btn-block main-button"> <FontAwesomeIcon icon={faCheckCircle} /> Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;