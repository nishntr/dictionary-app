import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.css';

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark"  >
                <Navbar.Brand href="/" className='m-2'>Oxford Dictionary</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="https://developer.oxforddictionaries.com/">About</Nav.Link>
                    <Nav.Link href="#login">Login</Nav.Link>
                </Nav>
                
            </Navbar>
        );
    }
}

export default NavBar;