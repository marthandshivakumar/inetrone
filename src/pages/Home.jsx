import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FaCheckCircle, FaRocket, FaUsers, FaUserTie } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay } from 'swiper/modules';
import 'swiper/css';

const home = () => {
  return (
    <>
      <div className="marquee">
        <div className="track">
          <div className="content">&nbsp;Where Innovation Meets Motion... | Engineering Excellence... | Smarter Mobility, Smarter Future... | Powering Progress.</div>
        </div>
      </div>
      <section className='home_sec'>
        <Container>
          <Row className='align-items-center gy-4'>
            <Col lg={6}>
              <div className="banner-text">
                <h4>INEUTRONE TECHNOLOGIES PVT LTD</h4>
                <h1 className="title">
                  Technology Partner for Smart Mobility Solutions
                </h1>
                <div className="mt-4 d-flex flex-wrap gap-3">
                  <Button className='theme-btn'>Contact Us</Button>
                  <Button className='theme-btn outline'>Know More</Button>
                </div>
              </div>
            </Col>
            <Col lg={6} className='text-center'>
              <div className="banner-img">
                <img src='/client/ai-in.svg' className='img-fluid' alt="Banner Images" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        {/* <Container>
          <Row>
            <Col>
              <div className="service-item">
                <div className="d-flex justify-content-between align-items-center mb-4 gap-3 flex-wrap">
                  <div className="icon">
                    <img src="./icon-1.png" alt="" />
                  </div>
                  <h3 className="heading">Autonomous Drive</h3>
                </div>
                <p>Our specialist skills in ADAS/AD from upstream research to downstream implementation enable us to partner with Global Tier1/ OEM on System engineering, algorithm developments, sensor fusion ( Lidar, Radar, Camera & Ultrasonics), KPI analysis and porting into various Target platforms to achieve ISO26262 compliances.</p>
              </div>
            </Col>
            <Col>
              <div className="service-item">
                <div className="d-flex justify-content-between align-items-center mb-4 gap-3 flex-wrap">
                  <div className="icon">
                    <img src="./icon-2.png" alt="" />
                  </div>
                  <h3 className="heading">EV Mobility
                  </h3>
                </div>
                <p>Our In-house solutions in 2W/3W Electric vehicles (both Hardware & Software) enable us to partner with Global Tier1/ OEM for quick customization and reduce the development cycle significantly especially on Traction Control Motor Drive, Battery Management Systems, and Digital cluster with 2W/3W target features.</p>
              </div>
            </Col>
            <Col>
              <div className="service-item">
                <div className="d-flex justify-content-between align-items-center mb-4 gap-3 flex-wrap">
                  <div className="icon">
                    <img src="./icon-3.png" alt="" />
                  </div>
                  <h3 className="heading">Infotainment</h3>
                </div>
                <p>Strong expertise in working with key Tier1/ OEM on developing E2E- Infotainment software development including HMI, Application & its framework, Middleware, BSP configuration/ optimization, Kernel configuration/ optimization and porting into various target platforms/ multi-core systems in both Linux & Android OS.</p>
              </div>
            </Col>
            <Col>
              <div className="service-item">
                <div className="d-flex justify-content-between align-items-center mb-4 gap-3 flex-wrap">
                  <div className="icon">
                    <img src="./icon-4.png" alt="" />
                  </div>
                  <h3 className="heading">IoT & Connected system</h3>
                </div>
                <p>Our IoT professionals specialized in developing full- stack IoT solutions involving the device to the cloud with AI/ML algorithms, processing & visualizations for connected vehicles and industrial automation.</p>
              </div>
            </Col>
          </Row>
        </Container> */}
      </section>
      <section className='about_sec'>
        <Container fluid>
          <Row className="align-items-center">
            {/* <Col lg={5} xxl={6} className="ps-0"> 
               <div className="about-img border">
                 Counter Area
                <div className="counter-area pt-5 pb-4">
                  <Container>
                    <Row className='gy-4'>
                      <Col lg={6} sm={6} md={3}>
                        <div className="single-counter text-center">
                          <div className="icon">
                            <FaCheckCircle size={40} />
                          </div>
                          <h3 className='heading'><span id="count1">7</span>+</h3>
                          <p className='subheading'>Years Experience</p>
                        </div>
                      </Col>
                      <Col lg={6} sm={6} md={3}>
                        <div className="single-counter text-center">
                          <div className="icon">
                            <FaRocket size={40} />
                          </div>

                          <h3 className='heading'><span id="count2">55</span>+</h3>
                          <p className='subheading'>Projects Done</p>
                        </div>
                      </Col>
                      <Col lg={6} sm={6} md={3}>
                        <div className="single-counter text-center">
                          <div className="icon">

                            <FaUsers size={40} />
                          </div>
                          <h3 className='heading'><span id="count3">10</span>+</h3>
                          <p className='subheading'>Happy Clients</p>
                        </div>
                      </Col>
                      <Col lg={6} sm={6} md={3}>
                        <div className="single-counter text-center">
                          <div className="icon">

                            <FaUserTie size={40} />
                          </div>
                          <h3 className='heading'><span id="count4">350</span>+</h3>
                          <p className='subheading'>Expert Members</p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div> 
              
            </Col>
              */}
            <Col lg={12} xxl={12} >
              <div className="about-content">
                {/* <span className='badge'>About Us</span> */}
          <h4 className="theme-color text-center">About Us</h4>

                <h2 className='sec-title'>INEUTRONE TECHNOLOGIES ENGINEERING PRIVATE LIMITED</h2>
                <p>
                  Explore INEUTRONE TECHNOLOGIES, a category-defining engineering solutions firm redefining
                  core engineering problems in the Smart Mobility space.
                </p>
                <p>
                  As a part of core strategy, Ineutrone  seeks to bridge the gap between core engineering and
                  digital technologies. We seek to achieve this by leveraging the availability of data and
                  data relevant technologies along with advancement in embedded electronics and core
                  engineering.
                </p>
                <div className="about-btn">
                  <Button className='theme-btn' href="/company">Know More</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='our_sec pt-0'>
        <Container>
          <h4 className="theme-color text-center">Offering</h4>
          <Row className='row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center g-4'>
            <Col>
              <div className="service-card">
                <div className="icon">
                  <img src="./offer-1.png" alt="Images" />
                </div>

                <a href="#">
                  <h3>Embedded Product Engineering</h3>
                </a>
                <ul className="text-start">
                  <li>Intelligence Algorithm development</li>
                  <li>Embedded Software Development - AUTOSAR </li>
                  <li>Embedded Software Development - Linux/Android</li>
                  <li>HMI, Application framework development</li>
                </ul>
                <div className="about-btn mt-3">
                  <a href="#" className="btn theme-btn" >Know More</a>
                </div>
              </div>
            </Col>
            <Col>
              <div className="service-card">
                <div className="icon">
                  <img src="./offer-2.png" alt="Images" />
                </div>

                <a href="#">
                  <h3>Data Science and Engineering</h3>
                </a>
                <ul class="text-start">
                  <li>Data Acquisition &amp; Ingestion</li>
                  <li>Data Modeling, Staging and Warehousing </li>
                  <li>ETL</li>
                  <li>Database Management Systems and Data Mining</li>
                </ul>
                <div className="about-btn mt-3">
                  <a href="#" className="btn theme-btn" >Know More</a>
                </div>
              </div>
            </Col>
            <Col>
              <div className="service-card">
                <div className="icon">
                  <img src="./offer-3.png" alt="Images" />
                </div>

                <a href="#">
                  <h3>ADAS Technology </h3>
                </a>
                <ul class="text-start">
                  <li>Intelligent Algorithms</li>
                  <li>Feature Design </li>
                  <li>Decision Making</li>
                  <li>Optimization &amp; Process Automation</li>
                </ul>
                <div className="about-btn mt-3">
                  <a href="#" className="btn theme-btn" >Know More</a>
                </div>
              </div>
            </Col>
            <Col>
              <div className="service-card">
                <div className="icon">
                  <img src="./offer-4.png" alt="Images" />
                </div>

                <a href="#">
                  <h3>Tools and Automation </h3>
                </a>
                <ul class="text-start">
                  <li>Data Management Framework</li>
                  <li>Real time data tagging and Annotation Framework </li>
                  <li>Data Visualization web framework</li>
                  <li>Validation Tools</li>
                </ul>
                <div className="about-btn mt-3">
                  <a href="#" className="btn theme-btn" >Know More</a>
                </div>
              </div>
            </Col>
            <Col>
              <div className="service-card">
                <div className="icon">
                  <img src="./offer-5.png" alt="Images" />
                </div>

                <a href="#">
                  <h3>Verification and Validation </h3>
                </a>
                <ul class="text-start">
                  <li>Test bench development</li>
                  <li>Test Automation framework development</li>
                  <li>Software testing (Unit, Integration &amp; Functional)</li>
                  <li>Model-based testing – MIL/SIL/HIL</li>
                  <li>System testing</li>
                </ul>
                <div className="about-btn mt-3">
                  <a href="#" className="btn theme-btn" >Know More</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section className='ourClient_sec pt-0'>

        <Container className='text-center'>
          <h4 className="theme-color text-center mb-3">Our Client</h4>
          <div className="col-md-6 m-auto">
            <h2>Key Partnership with Major Automotive / Aerospace OEM's & Tier1</h2>
          </div>

          <div className="slider-wrapper">
          <Swiper
      modules={[ Autoplay]}
      spaceBetween={30} 
      speed={1000}
      loop={true}
      breakpoints={{
        320: { slidesPerView: 2 },  
        768: { slidesPerView: 3 },  
        1024: { slidesPerView: 6 }, 
      }}
    >
      <SwiperSlide>
        <div className="client-images">
          <img src="./client/benz.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-images">
        <img src="./client/eonas.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-images">
        <img src="./client/faurecia.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-images">
        <img src="./client/fev.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-images">
        <img src="./client/forvia.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-images">
        <img src="./client/lucas.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-images">
        <img src="./client/magna.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-images">
        <img src="./client/mei.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-images">
        <img src="./client/porvia-hella.png" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client-images">
        <img src="./client/toyota.png" alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
          </div>
        </Container>
      </section> */}
    </>
  )
}

export default home
