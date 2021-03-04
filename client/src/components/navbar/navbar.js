import React, {Component, Fragment} from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import RegisterModal from '../auth/RegisterModal';
import Logout from '../auth/logout';
import Login from '../auth/LoginModal';

import NavItem from "react-bootstrap/esm/NavItem";


class navbar extends Component {
    state = {
        isOpen: false
    };

    static propTypes = {
        auth: PropTypes.object.isRequired
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
    render() {
        const {isAuthenticated, user} = this.props.auth;

        const authLinks = (<Fragment>
            <NavItem>
                <span className='navbar-text mr-3'>
                    <strong> {
                        user ? `Welcome ${
                            user.username
                        }` : ''
                    }</strong>
                </span>
            </NavItem>
            <Nav.Link className="text-black" href="/">Home</Nav.Link>
            <Nav.Link className="text-black" href="/Artistfind">Artistfind</Nav.Link>
            <Nav.Link className="text-black" href="/Profile">Profile</Nav.Link>

            <Nav.Link className="text-black" href="/About">About</Nav.Link>
            <NavItem>
                <Logout/>
            </NavItem>
        </Fragment>);

        const guestLinks = (<Fragment>
            <NavItem>
                <RegisterModal/>
            </NavItem>
            <NavItem>
                <Login/>
            </NavItem>
        </Fragment>);

        return (<Navbar collapseOnSelect className="gradient border fixed-top" expand="lg">
            <Navbar.Brand className="text-black" href="#home">WanderList</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"> {
                    isAuthenticated ? authLinks : guestLinks
                } </Nav>


            </Navbar.Collapse>
        </Navbar>)

    }
}

const mapStateToProps = state => ({auth: state.auth});

export default connect(mapStateToProps, null)(navbar)
