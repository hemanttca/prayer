import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';



const Navgation = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary navbar">
                <Container>
                    <Navbar.Brand href="/"> <img src='images/logo-1.png' alt='logo' /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link style={{fontWeight: 600,}} as={Link} to="/">Home</Nav.Link>
                            <Nav.Link style={{fontWeight: 600,}} as={Link} to="/about">About Us</Nav.Link>
                            <Nav.Link style={{fontWeight: 600,}} as={Link} to="/services">Service</Nav.Link>
                            <Nav.Link style={{fontWeight: 600,}} as={Link} to="/event">Event</Nav.Link>
                            <NavDropdown style={{fontWeight: 600,}} title="Pages" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} href="#action/3.1">Action</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link style={{fontWeight: 600,}} as={Link} to='/blogs'>Blogs</Nav.Link>
                            <Nav.Link style={{fontWeight: 600,}} as={Link} href="#link">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navgation