import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { img, name, seller, price, stock, key } = props.product;
    return (
        <Card className='container-fluid my-2'>
            <Card.Body className='d-flex'>

                <img className='img-thumbnail' src={img} alt="not found" />

                <div className="ml-5">

                    <h5 className="product-name"> <Link to={'/product/' + key}> {name} </Link> </h5>

                    <h6>Manufactured by : {seller}</h6>
                    <h4>Price : ${price}</h4>
                    <p>only {stock} left in stock - order soon</p>

                    {props.showButton && <button onClick={() => props.handleAddProduct(props.product)} className="main-button" > <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
                </div>

            </Card.Body>
        </Card >
    );
};

export default Product;