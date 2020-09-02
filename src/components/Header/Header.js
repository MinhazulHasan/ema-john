import React from 'react';
import logo from '../../images/logo.png';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="d-flex justify-content-md-center">
                <img style={{height:'80px', margin:'4px 0'}} src={logo} alt="" />
            </div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Link to="/shop" className="navbarOption">Shop</Link>
                    <Link to="/review" className="navbarOption">Order Review</Link>
                    <Link to="/inventory" className="navbarOption">Manage Inventory</Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
};

export default Header;