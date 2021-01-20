// Navigation.jsx
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import {SearchTextContext} from './searchtextprovider';

class Navigation extends Component {
    state = {
        toggle:false,
        searchText: ""
    }

    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
    }

    onKeyUp = (e) => {
        if (e.charCode === 13) {
          this.setState({ searchText: e.target.value });
        }
    }

    render () {
        return (
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand href="/">Masjid Membership</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">home</Nav.Link>
                        <Nav.Link href="/members">members</Nav.Link>
                        <Nav.Link href="/printout">printout</Nav.Link>
                        <Nav.Link href="/logout">logout</Nav.Link>
                        <Nav.Link href="/login">login</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="search" className="mr-sm-2" 
                            onChange={e => this.setState({ searchText: e.target.value})}    
                            onKeyPress={this.onKeyUp}
                        />
                        <SearchTextContext.Consumer>
                            {(context) => (
                                <Button variant="outline-success" onClick={()=>{context.setSearchText(this.state.searchText)}}>search</Button>
                            )}
                        </SearchTextContext.Consumer>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;