import React from 'react'
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaPhone, FaComments, FaEnvelope, FaStar, FaTwitter, FaFacebookF, FaLinkedinIn, FaEllipsisH } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className='footer pb-0 pt-0'>
        <footer className="py-4">
          <Container>
            <Row className='my-4'>
              <Col md={6}>
                <div className="text-white">
                  INEUTRONE <span className="theme-color">TECHNOLOGIES</span>
                  <p>A category-defining engineering solutions firm redefining core engineering problems in the Smart Mobility space.</p>
                </div>
              </Col>
              <Col md={6}></Col>
            </Row>
            <hr className='text-white' />
            <Row>
              <Col md={4} className="footer-column">
                <Nav className="flex-column">
                  <Nav.Item>
                    <span className="footer-title">Offering</span>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Data Science & Engineering</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#"> ADAS Technology</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">Tools & Automation</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#"> Verification & Validation</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#"> Embedded Product Engineering</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col md={4} className="footer-column">
                <Nav className="flex-column">
                  <Nav.Item>
                    <span className="footer-title">Quick Links</span>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/company">About us</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/career">Job postings</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#">News and articles</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col md={4} className="footer-column">
                <Nav className="flex-column">
                  <Nav.Item>
                    <span className="footer-title">Contact & Support</span>
                  </Nav.Item>
                  <Nav.Item>
                    <span className="nav-link"><FaPhone /> +91 7075474499</span>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#"><FaComments /> Live chat</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/contact"><FaEnvelope /> Contact us</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#"><FaStar /> Give feedback</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>

            <div className="text-center my-3">
              <FaEllipsisH />
            </div>

            <Row className="text-center">
              <Col md={4} className="box">
                <span className="copyright quick-links">
                  Copyright &copy; INEUTRONE TECHNOLOGIES  {new Date().getFullYear()}
                </span>
              </Col>
              <Col md={4} className="box">
                <Nav className="justify-content-center">
                  <Nav.Item>
                    <Nav.Link href="#"><FaTwitter /></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#"><FaFacebookF /></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#"><FaLinkedinIn /></Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col md={4} className="box">
                <Nav className="justify-content-center">
                  <Nav.Item>
                    <Nav.Link href="/privacy-policy">Privacy Policy</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/terms">Terms of Use</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </section>
    </>
  )
}

export default Footer
