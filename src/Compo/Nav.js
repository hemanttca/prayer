import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Nav.css'


const Navgation = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary navbar">
                <Container>
                    <Navbar.Brand href="/"> <img src='images/logo-1.png' alt='logo' /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown className='links' title="Home" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/">Home</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='links' as={Link} to="/about">About Us</Nav.Link>
                            <Nav.Link className='links' as={Link} to="/services">Service</Nav.Link>
                            <Nav.Link className='links' as={Link} to="/event">Event</Nav.Link>
                            <NavDropdown className='links' title="Pages" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} href="#action/3.1">Action</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='links' as={Link} href="#link">Blogs</Nav.Link>
                            <Nav.Link className='links' as={Link} href="#link">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navgation