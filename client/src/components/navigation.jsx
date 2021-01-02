// Navigation.jsx
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

class Navigation extends Component {
    state = {
        toggle:false
    }

    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
    }

    render () {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Masjid Membership</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/members">Members</Nav.Link>
                        <Nav.Link href="/logout">Logout</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;