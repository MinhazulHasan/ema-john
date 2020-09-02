import React from 'react';
import { Card, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = (props) => {

    const { name, quantity, key, price, img } = props.product;
    return (
        <Card className='container-fluid my-2 bg-dark'>
            <Card.Body className='d-flex'>
                <img className='img-thumbnail' src={img} alt="not found" />
                <div className="ml-5" style={{ color: '#fff' }}>
                    <h4>  {name}  </h4>
                    <p>Quantity : {quantity}</p>
                    <h4>Price : ${price}</h4>
                    <button onClick={() => props.removeProduct(key)} className="main-button mt-3"> <FontAwesomeIcon icon={faTrash} /> Remove Item </button>
                </div>
            </Card.Body>
        </Card >
    );
};

export default ReviewItem;