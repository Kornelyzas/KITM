import React from 'react'
import './header.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import MenuIcon from '@material-ui/icons/Menu'
import image from '../images/kitm-logo.jpg'
import Image from 'react-bootstrap/Image'
import SimpleMenu from './Menu'

function Header() {
    return (
        <div className='header'>
            <style type='text/css'>
                {`
                .nav-link {
                    color: black !important;
                }
                `}
            </style>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
            <Navbar.Brand href="#home" ><Image className='logo' src={image} fluid/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <SimpleMenu/>
            </Navbar>
        </div>
    )
}

export default Header
