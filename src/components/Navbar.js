import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "../css/Navbar.css";
import { IndexLinkContainer } from "react-router-bootstrap";
import navIcon from "../assets/navIcon.png";
import companyLogo from "../assets/companyLogo.png";

const MyNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="myNav">
      <Navbar className="navColour" expand="md">
        <IndexLinkContainer to="/">
          <NavbarBrand href="/">
            <img src={companyLogo} alt="logo" />
            {/* Offset Printers */}
          </NavbarBrand>
        </IndexLinkContainer>
        <NavbarToggler onClick={toggle}>
          <img src={navIcon} id="navTogglerIcon" alt="img" />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="navItem">
              <IndexLinkContainer to="/products">
                <NavLink href="/components/">Products</NavLink>
              </IndexLinkContainer>
            </NavItem>
            <NavItem className="navItem">
              <IndexLinkContainer to="/getQuote">
                <NavLink href="/components/">Get Quote</NavLink>
              </IndexLinkContainer>
            </NavItem>
            <NavItem className="navItem">
              {/* <IndexLinkContainer to="/contact"> */}
              <NavLink href="#footer">Contact us</NavLink>
              {/* </IndexLinkContainer> */}
            </NavItem>
            <NavItem className="navItem">
              <IndexLinkContainer to="/faqs">
                <NavLink>FAQs</NavLink>
              </IndexLinkContainer>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavItem className="navItem">
            <IndexLinkContainer to="/admin/dashboard">
              <NavLink>Admin</NavLink>
            </IndexLinkContainer>
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MyNav;
