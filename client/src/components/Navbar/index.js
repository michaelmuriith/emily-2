import React from 'react';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import './navbar.css';
import logo from '../../images/e-news.png';
import user from '../../images/user.jpg';

export const NavBar = () => {
  return (
    <Navbar>
        <Container>
            <Navbar.Brand href="#home">
                <img
                    src={logo} className="d-inline-block align-top" alt="24 news logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link" >
                        <img src={user} className='nav_pic' alt="" />
                    </Nav.Link>
                    <NavDropdown title="Mercy Wanjiru" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4" className="text-d">Log out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
