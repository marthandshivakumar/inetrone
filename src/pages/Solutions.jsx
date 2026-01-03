import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Solutions() {
    return (
        <section className='our_sec pt-0 '>
            <Container>
                <h4 className="theme-color text-center">Solutions</h4>
                <Row className='row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center g-4'>
                    
                    <Col md={6}>
                        <div className="service-card" >
                            <div className="icon">
                                <img src="./offer-1.png" alt="Diagnostics" />
                            </div>

                            <a href="#">
                                <h3>Diagnostics</h3>
                            </a>
                            <ul class="text-start">
                                <li>Comprehensive Vehicle Diagnostics</li>
                                <li>Diagnostic Tools and Equipment</li>
                                <li>On-Board Diagnostics (OBD) Integration</li>
                                <li>Fault Code Analysis and Troubleshooting</li>
                            </ul>
                            <div className="about-btn mt-3">
                                <a href="#" className="btn theme-btn">Know More</a>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="service-card">
                            <div className="icon">
                                <img src="./offer-2.png" alt="ADAS Systems" />
                            </div>

                            <a href="#">
                                <h3>ADAS Systems</h3>
                            </a>
                            <ul class="text-start">
                                <li>Advanced Driver Assistance Systems</li>
                                <li>Lane Departure Warning</li>
                                <li>Adaptive Cruise Control</li>
                                <li>Automatic Emergency Braking (AEB)</li>
                                <li>Parking Assistance and Sensors</li>
                            </ul>
                            <div className="about-btn mt-3">
                                <a href="#" className="btn theme-btn">Know More</a>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="service-card">
                            <div className="icon">
                                <img src="./offer-3.png" alt="Passive Safety" />
                            </div>

                            <a href="#">
                                <h3>Passive Safety</h3>
                            </a>
                            <ul class="text-start">
                                <li>Airbag Systems Design & Integration</li>
                                <li>Seatbelt and Restraint System Design</li>
                                <li>Crash Test Simulation and Analysis</li>
                                <li>Impact Protection Technologies</li>
                                <li>Pedestrian Protection Systems</li>
                            </ul>
                            <div className="about-btn mt-3">
                                <a href="#" className="btn theme-btn">Know More</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Solutions