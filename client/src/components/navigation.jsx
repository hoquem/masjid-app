// Navigation.jsx
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import {LinkContainer} from 'react-router-bootstrap';
import FormControl from 'react-bootstrap/FormControl';
import {SearchTextContext} from './searchtextprovider';
//import { Container } from 'react-bootstrap/lib/Tab';

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
                        <LinkContainer to="/">
                            <Nav.Link href="/">home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/members">
                            <Nav.Link>members</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/printout">
                            <Nav.Link>printout</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/logout">
                            <Nav.Link href="/logout">logout</Nav.Link>
                        </LinkContainer>
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