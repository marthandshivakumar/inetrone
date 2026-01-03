import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Offcanvas, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBars, FaArrowUp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Topbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
    {
     showButton && (
      <button
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowUp />
      </button>
    )
  }
      <Navbar expand="lg" className="py-3">
        <Container>
          <Navbar.Brand as={Link} to="/">INEUTRONE <span className="theme-color">TECHNOLOGIES</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar">
            <FaBars />
          </Navbar.Toggle>
          <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="align-items-center">
              <Nav className="mx-auto">
                <Nav.Link as={Link} to="/home"> Home</Nav.Link>
                <Nav.Link as={Link} to="/company"> Company</Nav.Link>
                <Nav.Link as={Link} to="/offering"> Offering</Nav.Link>
                <Nav.Link as={Link} to="/solutions"> Solutions</Nav.Link>
                <Nav.Link as={Link} to="/career"> Career</Nav.Link>
                <Nav.Link as={Link} to="/contact"> Contact</Nav.Link>
                {/* <NavDropdown
                  title="Categories"
                  id="mega-menu"
                  show={showDropdown}
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <div className="dropdown-menu w-100 p-3">
                    <div className="d-flex flex-wrap">
                      {[...Array(6)].map((_, i) => (
                        <div className="p-3" key={i}>
                          <h6>Category {i + 1}</h6>
                          <NavDropdown.Item as={Link} to={`/category${i + 1}/item1`}>Sub-item 1</NavDropdown.Item>
                          <NavDropdown.Item as={Link} to={`/category${i + 1}/item2`}>Sub-item 2</NavDropdown.Item>
                        </div>
                      ))}
                    </div>
                  </div>
                </NavDropdown> */}
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/contact">
                  <Button className="theme-btn">Let's Talk</Button>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Topbar;