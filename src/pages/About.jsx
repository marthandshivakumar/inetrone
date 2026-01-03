import React from 'react'
import { Button, Card, Col, Container, Row, Badge } from 'react-bootstrap'
// import Contact from './Contact';
import PageTitle from '../components/Pagetitle';
import { FaBusinessTime, FaProjectDiagram } from 'react-icons/fa';
import { IoHappyOutline } from 'react-icons/io5';
import { GrUserExpert } from 'react-icons/gr';

function About() {


    const timelineData = [
        {
            date: '2025',
            title: 'Day 1 Orientation',
            description: 'Founded with 5 team members – Key product development – Automotive domain',
        },
       
    ];
    // const careerItems = [
    //     { img: "/about/graph.png", text: "Compensation – Best in the market" },
    //     { img: "/about/grow.png", text: "Extra Earning Opportunities – other than Salary" },
    //     { img: "/about/entrapuner.png", text: "Personal development Roadmap" },
    //     { img: "/about/computer.png", text: "Cross functional learning – Digital & Core technologies" },
    //     { img: "/about/intelgence.png", text: "Research – AI & Computer Vision" },
    //     { img: "/about/company.png", text: "Learn - Technology & Business together" },
    //     { img: "/about/roadmap.png", text: "Fast Track Career Growth" },
    //     { img: "/about/shakehand.png", text: "Partnership Culture – Employees" },
    //     { img: "/about/carrer-op.png", text: "Onsite Opportunities" },
    //     { img: "/about/doc.png", text: "Patents & Ownership" },
    //     { img: "/about/carrer.png", text: "Sponsorship – MS, PhD – from IIT Madras" },
    //     { img: "/about/cheers.png", text: "Celebration – Fun Fridays/Get together/ Team Lunch/Dinner/Outing" },
    //     { img: "/about/health.png", text: "Health Insurance/ Accident Insurance" },
    //   ];
    return (
        // <Container className="mt-4">
        //     <h2 className="text-center">Transforming Career @IELEKTRON</h2>

        //     <Row className="text-center my-4">
        //         <Col md={3}><Card className="p-3 bg-light"><strong>Engineer</strong></Card></Col>
        //         <Col md={3}><Card className="p-3 bg-warning text-dark"><strong>Professional</strong></Card></Col>
        //         <Col md={3}><Card className="p-3 bg-primary text-white"><strong>Leader</strong></Card></Col>
        //         <Col md={3}><Card className="p-3 bg-success text-white"><strong>Entrepreneur</strong></Card></Col>
        //     </Row>

        //     <Row className="text-center my-3">
        //         <Col md={4}><Card className="p-3 bg-warning">"Professional" = Building Competency</Card></Col>
        //         <Col md={4}><Card className="p-3 bg-primary text-white">"Leader" = Building Confidence</Card></Col>
        //         <Col md={4}><Card className="p-3 bg-success text-white">"Entrepreneur" = Building Confidence + Right Strategies</Card></Col>
        //     </Row>

        //     <h3 className="text-center my-4 bg-dark text-white p-2">INEUTRONE TECHNOLOGIES - PLATFORM FOR TRANSFORMING CAREERS AS PARTNER</h3>

        //     <Row className="text-center">
        //         {careerItems?.map((item, index) => (
        //             <Col key={index} md={3} sm={6} xs={12} className="mb-4">
        //                 <div>
        //                     <img style={{ fontSize: "2rem" }} src={item.img} className='w-10 h-10' />
        //                     <p className="mt-2">{item.text}</p>
        //                 </div>
        //             </Col>
        //         ))}
        //     </Row>

        // {/* <h3 className="text-center my-4">Celebration @ INEUTRONE TECHNOLOGIES</h3>
        // <h4 className="text-center">Fun Friday</h4> */}
        // {/* <Contact /> */}
        // </Container>

        <>
            <section className='p-0 page-title'>
                <Container>
                    <PageTitle
                        breadcrumbItems={[
                            { label: "Home", link: "/" },
                            { label: "Company", link: "/about" }
                        ]}
                    />
                </Container>
            </section>
            <Container className='my-4'>
                <Row className='align-items-center'>
                    <Col>
                        <img src="./about.avif" className='img-fluid' alt="" />
                    </Col>
                    <Col md={6}>
                        <div className="about-content">
                            <span className='badge'>About Us</span>
                            <h2 className='sec-title'>INEUTRONE TECHNOLOGIES ENGINEERING PRIVATE LIMITED</h2>
                            <p>
                                Ineutrone aims to close the gap between digital technologies and fundamental engineering as part of its main strategy. By utilizing the availability of data and data-relevant technologies, as well as developments in embedded electronics and core engineering, we hope to accomplish this.
                                Ineutrone envisions next-generation smart systems that aim to use creativity and innovation to solve mobility-related issues.

                            </p>
                            <p>
                                As a part of core strategy, Ineutrone seeks to bridge the gap between core engineering and
                                digital technologies. We seek to achieve this by leveraging the availability of data and
                                data relevant technologies along with advancement in embedded electronics and core
                                engineering.
                            </p>
                            <p>
                                INEUTRONE TECHNOLOGIES envisages next-generation smart systems that seek to approach the problems in the mobility space with novelty and innovation.
                            </p>
                            <div className="about-btn">
                                <Button className='theme-btn' href="/company">Know More</Button>
                            </div>
                        </div></Col>
                </Row>
            </Container>
            <Container className="py-2 mt-4 mb-4">
                {timelineData.map((item, index) => (
                    <Row key={index} className="mb-4">
                        <Col xs="auto" className="text-center d-none d-sm-flex flex-column">
                            <Row className="h-50">
                                <Col>&nbsp;</Col>
                                <Col>&nbsp;</Col>
                            </Row>
                            <h5 className="m-2">
                                <Badge bg="primary" className="border shadow-sm">&nbsp;</Badge>
                            </h5>
                            <Row className="h-50">
                                <Col className="border-end border-primary">&nbsp;</Col>
                                <Col>&nbsp;</Col>
                            </Row>
                        </Col>
                        <Col className="py-2">
                            <Card className="shadow">
                                <Card.Body>
                                    <div className="float-right text-muted">{item.date}</div>
                                    <h4 className="card-title">{item.title}</h4>
                                    <p className="card-text">{item.description}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                ))}
            </Container>
            {/* <Container className='bg-theme'> 
                {/* <Row className='row-cols-lg-4 row-cols-md-2 row-cols-sm-2  row-cols-1 g-4'>
                    <Col>
                        <div className="stats">
                            <div className="icon">
                                <FaBusinessTime ></FaBusinessTime>
                            </div>
                            <div className="num">6+</div>
                            <div className="text">Years Experience</div>
                        </div>
                    </Col>
                    <Col>
                        <div className="stats">
                            <div className="icon">
                                <FaProjectDiagram/>
                            </div>
                            <div className="num">55+</div>
                            <div className="text">Project Done</div>
                        </div>
                    </Col>
                    <Col>
                        <div className="stats">
                            <div className="icon">
                                <IoHappyOutline/>
                            </div>
                            <div className="num">10+</div>
                            <div className="text">Happy Clients</div>
                        </div>
                    </Col>
                    <Col>
                        <div className="stats">
                            <div className="icon">
                                <GrUserExpert />
                            </div>
                            <div className="num">350+</div>
                            <div className="text">Expert Members</div>
                        </div>
                    </Col>
                </Row> 
             </Container> */}
        </>
    )
}

export default About