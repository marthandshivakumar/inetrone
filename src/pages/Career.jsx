import React from 'react'
import { Container, Row, Button,InputGroup, Col, Form } from "react-bootstrap";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PageTitle from '../components/Pagetitle';
import { useForm } from 'react-hook-form';
import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots, FaPen } from "react-icons/fa";
function Career() {
   const {
          register,
          handleSubmit,
          formState: { errors },
      } = useForm();
  
      const onSubmit = (data) => {
          console.log(data);
      };
  return (
    <>
      <section className='p-0 page-title'>
        <Container>
          <PageTitle
            breadcrumbItems={[
              { label: "Home", link: "/" },
              { label: "Career", link: "/career" }
            ]}
          />
        </Container>
      </section>
      <Container className="my-4 career">
        <h3 className='text-center'>Transforming Career INEUTRONE <span className='theme-color'>TECHNOLOGIES</span></h3>
        <Row className='mt-3'>
          <Col className='p-3'>
            {/* <img src="./career-transforming.png" alt="" className='img-fluid' /> */}
          </Col>
        </Row>
        <div className="sec-title mb-4">
          <h4>Career</h4>
        </div>
        <Row className='row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4'>
          <Col>
            <div className="career-image">
              <img src="./about/graph.png" alt="" />
            </div>
            <div className="text">
            Best in Market
            </div>
          </Col>
          <Col>
            <div className="career-image">
              <img src="./about/grow.png" alt="" />
            </div>
            <div className="text">
              Extra Earning Opportunities – other than Salary
            </div>
          </Col>
          <Col>
            <div className="career-image">
              <img src="./about/roadmap.png" alt="" />
            </div>
            <div className="text">
              Personal development 
            </div>
          </Col>
          <Col>
            <div className="career-image">
              <img src="./about/carrer.png" alt="" />
            </div>
            <div className="text">
              Cross functional learning – Digital & Core technologies
            </div>
          </Col>
          <Col>
            <div className="career-image">
              <img src="./about/intelgence.png" alt="" />
            </div>
            <div className="text">
              Research – AI & Computer Vision
            </div>
          </Col>
          <Col>
            <div className="career-image">
              <img src="./about/computer.png" alt="" />
            </div>
            <div className="text">
            Learn New Technology
            </div>
          </Col>
          <Col>
            <div className="career-image">
              <img src="./about/carrer.png" alt="" />
            </div>
            <div className="text">
            Fast Track Career Growth
            </div>
          </Col>
          <Col>
            <div className="career-image">
              <img src="./about/entrapuner.png" alt="" />
            </div>
            <div className="text">
              Partnership Culture – Employees
            </div>
          </Col>
          <Col>
            <div className="career-image">
              <img src="./about/carrer-op.png" alt="" />
            </div>
            <div className="text">
              Onsite Opportunities
            </div>
          </Col>
          <Col>
            <div className="career-image">
              <img src="./about/doc.png" alt="" />
            </div>
            <div className="text">
              Patents & Ownership
            </div>
          </Col>
          <Col>
            <div className="career-image">
              <img src="./about/shakehand.png" alt="" />
            </div>
            <div className="text">
            Sponsorship – Cerifications 
            </div>
          </Col>
          <Col>
            <div className="career-image">
              <img src="./about/cheers.png" alt="" />
            </div>
            <div className="text">
            Celebration – Fun Fridays/Get together/ Team Lunch/Dinner/Outing
            </div>
          </Col>
          <Col>
            <div className="career-image">
              <img src="./about/health.png" alt="" />
            </div>
            <div className="text">
              Health Insurance
            </div>
          </Col>
        </Row>
        <div className="sec-title mb-4 mt-5">
          <h4>Celebration at INEUTRONE TECHNOLOGIES
          </h4>
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper celebration-slider"
        >
          <SwiperSlide>
            <h3 className="text-center">Festival Celebration</h3>
            <div className="image-wrapper">
              <img src="./cele-1.jpg" className='img-fluid' alt="Festival Celebration 1" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <h3 className="text-center">Festival Celebration</h3>
            <div className="image-wrapper">
              <img src="./cele-2.jpeg" className='img-fluid' alt="Festival Celebration 2" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <h3 className="text-center">Festival Celebration</h3>
            <div className="image-wrapper">
              <img src="./cele-3.jpg" className='img-fluid' alt="Festival Celebration 3" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="sec-title text-center my-4">
          <h4>Contact Us</h4>
          <h3 className='fw-bold'>Drop A Message For Any Query</h3>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)} className="py-5 px-4 shadow-sm bg-white rounded">
      <Row>
        <Col md={6} className="mb-3">
          <InputGroup>
            <InputGroup.Text><FaUser /></InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
            />
          </InputGroup>
          {errors.name && <small className="text-danger">{errors.name.message}</small>}
        </Col>
        <Col md={6} className="mb-3">
          <InputGroup>
            <InputGroup.Text><FaEnvelope /></InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
          </InputGroup>
          {errors.email && <small className="text-danger">{errors.email.message}</small>}
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3">
          <InputGroup>
            <InputGroup.Text><FaPhone /></InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Phone"
              {...register("phone", { required: "Phone is required" })}
            />
          </InputGroup>
          {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
        </Col>
        <Col md={6} className="mb-3">
          <InputGroup>
            <InputGroup.Text><FaRegCommentDots /></InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Subject"
              {...register("subject", { required: "Subject is required" })}
            />
          </InputGroup>
          {errors.subject && <small className="text-danger">{errors.subject.message}</small>}
        </Col>
      </Row>
      <Form.Group className="mb-3">
        <InputGroup>
          <InputGroup.Text><FaPen /></InputGroup.Text>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Message"
            {...register("message", { required: "Message is required" })}
          />
        </InputGroup>
        {errors.message && <small className="text-danger">{errors.message.message}</small>}
      </Form.Group>
      <div className="text-end">
        <Button type="submit" className="theme-btn px-4">Send Message</Button>
      </div>
    </Form>
      </Container>
    </>
  )
}

export default Career