import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css';
class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark"  >
                <Navbar.Brand href="/" className='m-2'>Oxford Dictionary</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end" style={{ width: "100%", paddingRight: 19 }}>
                        <Nav.Link href="/">Home </Nav.Link>
                        <Nav.Link href="https://developer.oxforddictionaries.com/">About </Nav.Link>
                        <Nav.Link href="#login">Login </Nav.Link>
                        <Nav.Link href="#login">Sign Up </Nav.Link>

                    </Nav>
                </Navbar.Collapse>


            </Navbar>

        );
    }
}

export default NavBar;