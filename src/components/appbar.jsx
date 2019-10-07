import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

import _ from 'lodash';

const Appbar =  ({ user }) => {
        
        return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
            <NavLink className="navbar-brand" to="/">POSTAPP</NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/posts">Posts</NavLink>
                    { _.isEmpty(user) &&  <React.Fragment>
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                            <NavLink className="nav-link" to="/register">Register</NavLink>
                        </React.Fragment>
                    }
                    { !_.isEmpty(user) && 
                    <React.Fragment>
                        <NavDropdown title={user.name} id="basic-nav-dropdown">
                            <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </React.Fragment>
                    }
                </Nav>
            </Navbar.Collapse>
            </Container>    
            </Navbar>
        )
}

export default Appbar;