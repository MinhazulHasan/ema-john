import React from 'react';
import { Table } from 'react-bootstrap';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((acc, item) => acc + item.price + item.quantity, 0);

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }

    const tax = (total / 10);
    const grandTotal = (total + shipping + tax);

    const formateNumber = num => Number(num.toFixed(2));

    return (
        <div>
            <h4 className="mt-2 text-center">Items Ordered : {cart.length}</h4>
            <Table variant="dark" className="mt-4" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Items Price</td>
                        <td>{formateNumber(total)}</td>
                    </tr>
                    <tr>
                        <td>Shipping & Handling</td>
                        <td>{shipping}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax</td>
                        <td>{formateNumber(tax)}</td>
                    </tr>
                    <tr>
                        <th>Order Total</th>
                        <th>{formateNumber(grandTotal)}</th>
                    </tr>
                </tbody>
            </Table>
            {
                props.children
            }
        </div>
    );
};

export default Cart;