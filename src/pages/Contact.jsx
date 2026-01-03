import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots, FaPen } from "react-icons/fa";
import PageTitle from '../components/Pagetitle';
import { IoLocationSharp } from 'react-icons/io5';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';


function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        console.log(data, "dataaa");
        try {
            const payload = {
                service_id: 'service_jmrbfte',
                template_id: 'template_15igmhd',
                user_id: 'Ozkrgwd5pTaEs85bY',
                to_email: 'info@ineutrone.com',
                from_email: data?.email,
                from_name: data.name,  // The name of the sender from the form
                message: data.message,  // The message content from the form
                subject: `Message from ${data.subject}`,
                body: `You have received a new message from ${data.name} (${data.email}) - Type: ${data.message}`,
              };
              
            const res = await emailjs.send(payload.service_id, payload.template_id, payload, payload.user_id);

            console.log(res, "res");
            toast.success("successful submission")
            if (res === 'OK') {

                reset(); // Reset the form after successful submission
            } else {
                throw new Error('Failed to send email');
            }
        } catch (err) {
            console.error('Error sending email:', err);
            toast.error('Error sending email:', err)

            // alert('Failed to send email. Please try again.');
        } finally {
            setLoading(false); // Set loading to false after email attempt
        }
    };
    return (
        <>
            <section className='p-0 page-title'>
                <Container>
                    <PageTitle
                        breadcrumbItems={[
                            { label: "Home", link: "/" },
                            { label: "Contact", link: "/contact" }
                        ]}
                    />
                </Container>
            </section>
            <Container className="mt-5">
                <Row className='justify-content-center'>
                    <Col md={12}>
                        <Card className='p-3 bg-image contact-card'>
                            <div className="icon">
                                <IoLocationSharp />
                            </div>
                            <h4>Ineutrone @ Bengaluru</h4>
                            <ul className='text-center list-unstyled lh-lg'>
                                <li>6th Floor, Brookes Enclave, </li>
                                <li>Pearl Paradise, ITPL Main Road, </li>
                                <li>Near Brigade Tech Park, </li>
                                <li>Brookefield, Bengaluru, </li>
                                <li>Karnataka – 560037</li>
                                <a className='text-warning' href='mailto:info@ineutrone.com'>info@ineutrone.com </a><br />
                                <a href="tel:+91 7075474499" className='text-warning'>+91 7075474499 </a>
                            </ul>
                        </Card>
                    </Col>
                </Row>
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
                <div className="my-5">
                    <Row className='justify-content-center'>
                        <Col md={12}>
                            <Card className='overflow-hidden'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4784.239338927918!2d77.7168121337891!3d12.9626541137695!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13ef96b0cb73%3A0x8cb251e525b111a!2sThe%20Filter%20Coffee!5e1!3m2!1sen!2sin!4v1739814879062!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Contact