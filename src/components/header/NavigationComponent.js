import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavbarToggler } from 'reactstrap'

const NavigationComponent = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen)
  }
  return (
    <div>
        <Navbar color="dark" dark expand="sm">
          <NavbarToggler onClick={toggleNavbar}/>
            <NavbarBrand href="/">
                ReactRestaurant
            </NavbarBrand>
          <Collapse isOpen={isNavOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/about">About</Link>
              </NavItem>
              <NavItem>
                <Link to="/menu">Menu</Link>
              </NavItem>
              <NavItem>
                <Link to="/contact">Contact</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </div>
  )
}

export default NavigationComponent