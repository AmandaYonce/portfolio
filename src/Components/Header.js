import React, {useState} from 'react';
import img from './Images/myAvatar.png'
import {
  Navbar, Nav,
  NavbarBrand, NavItem, Collapse, NavbarToggler
} from 'reactstrap';
import { NavLink } from "react-router-dom"

const Header = (props) => {

const [isOpen, setIsOpen] = useState(false)
const toggle = () => setIsOpen(!isOpen)


  return(
    <div>
    <Navbar fixed="top" light expand="md" className="navbar-dark bg-dark">
        <NavbarBrand href="/">Amanda Yonce</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink className="font-weight-bold" exact to="/">
                  <img src={img} alt="avatar" className="img-fluid rounded-circle" style={{ width: 36 }} />
                </NavLink>
              </NavItem>
              
              <NavItem className="d-flex align-items-center" style={{"padding-right": "10px", "padding-left": "10px"}}>
                <NavLink  style={{"color": "lightgrey"}}className="font-weight-bold" to="/">Home</NavLink>
              </NavItem>
              
              <NavItem className="d-flex align-items-center" style={{"padding-right": "10px", "padding-left": "10px"}}>
                <NavLink style={{"color": "lightgrey"}}className="font-weight-bold" to="/resume">Resume</NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center" style={{"padding-right": "10px", "padding-left": "10px"}}>
                <NavLink style={{"color": "lightgrey"}}className="font-weight-bold" to="/codesamples">Code Samples</NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center" style={{"padding-right": "10px", "padding-left": "10px"}}>
                <NavLink style={{"color": "lightgrey"}}className="font-weight-bold" to="/photos">Photos</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
    </Navbar>
  </div>
)
}

export default Header;