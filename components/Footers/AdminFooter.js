/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer bg-gradient-dark">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{" "}
            <a
              className="font-weight-bold ml-1"
              href="https://www.creative-tim.com?ref=njsad-admin-footer"
              rel="noopener noreferrer"
              target="_blank"
            >
              San-Remo
            </a>
          </div>
        </Col>

        <Col xl="6">
          <Nav className="nav-footer justify-content-center justify-content-xl-end">
            <NavItem>
              <NavLink
                href="#"
                rel="noopener noreferrer"
                target="_blank"
              >
                Creative Tim
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="#"
                rel="noopener noreferrer"
                
              >
                About Us
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="#"
                rel="noopener noreferrer"
                
              >
                Blog
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="#"
                rel="noopener noreferrer"
                
              >
                MIT License
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
