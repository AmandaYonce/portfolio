import React, {useState} from 'react';
import img from './Images/myAvatar.png'


import {
  Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, Collapse, NavbarToggler
} from 'reactstrap';

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
                <NavLink className="font-weight-bold" href="/">
                  <img src={img} alt="avatar" className="img-fluid rounded-circle" style={{ width: 36 }} />
                </NavLink>
              </NavItem>
              
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">Home</NavLink>
              </NavItem>
              
              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">Resume</NavLink>
              </NavItem>
              
              <UncontrolledDropdown className="d-flex align-items-center" nav inNavbar>
                <DropdownToggle className="font-weight-bold" nav caret>Projects</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="font-weight-bold text-secondary text-uppercase" header disabled>My Projects</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Anagrams</DropdownItem>
                  <DropdownItem>Activity Zone</DropdownItem>
                  <DropdownItem>Connect4</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
    </Navbar>
  </div>
)
}

export default Header;