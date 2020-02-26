import React, {useState} from 'react';
import img from './Images/myAvatar.png'
import {
  Navbar, Nav,
  NavbarBrand, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, Collapse, NavbarToggler
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
              
              <NavItem className="d-flex align-items-center" style={{"padding-right": "10px", "padding-left": "10px", "color": "white"}}>
                <NavLink  className="font-weight-bold" to="/">Home</NavLink>
              </NavItem>
              
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" to="/resume">Resume</NavLink>
              </NavItem>
              
              <UncontrolledDropdown className="d-flex align-items-center" nav inNavbar>
                <DropdownToggle className="font-weight-bold" nav caret>Projects</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="font-weight-bold text-secondary text-uppercase" header disabled>My Projects</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem className="font-weight-bold" href="https://amandayonce.github.io/PhotosFromHere/">Photos From Here</DropdownItem>
                  <DropdownItem className="font-weight-bold" href="https://amandayonce.github.io/activityZone/">Activity Zone</DropdownItem>
                  <DropdownItem className="font-weight-bold" href="https://amandayonce.github.io/GithubUserSearch/" >GitHub User API</DropdownItem>
                  <DropdownItem className="font-weight-bold" href="https://amandayonce.github.io/CanvasClock/" >Canvas Clock</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
    </Navbar>
  </div>
)
}

export default Header;