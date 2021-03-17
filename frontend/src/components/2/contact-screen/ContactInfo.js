import React from 'react'
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import SocialIcons from "../../SocialIcons";

const ContactInfo = () => {



    return (
        <>
            <Container>
                <h1 className='Contact_title'>Boerne Stage Airfield - 5C1</h1>
                <Row className='text-center text-white my-5'>

                    {/*   PHONE ICON/TEXT   */}
                    <Col md={4} sm={12}>
                        <Row>
                            <Col xs={12}>
                                <i className="Contact_icons fal fa-mobile-android"> </i>
                            </Col>
                            <Col xs={12} className='my-3'>
                                <p className='Contact_icons-title'>PHONE</p>
                            </Col>
                            <Col xs={12}>
                                <p className='Contact_icons-text p-0 m-0'>
                                    P: 800-BISON-99 (800-247-6699)
                                </p>
                                <p className='Contact_icons-text p-0 m-0'>
                                    P: 210-876-JETS (210-876-5387)
                                </p>
                                <p className='Contact_icons-text p-0 m-0'>
                                    F: 888-224-2127
                                </p>
                                <p>
                                    <span style={{color: 'red'}}>AOG:</span> 888-SOS-BISON (888-767-2476)
                                </p>


                            </Col>
                        </Row>
                    </Col>

                    {/*   ADDRESS ICON/TEXT   */}
                    <Col md={4} sm={12} className='Contact_border Contact_responsive-padding'>
                        <Row>
                            <Col xs={12}>
                                <i className="Contact_icons fal fa-map-marker-alt"> </i>
                            </Col>
                            <Col xs={12} className='my-3'>
                                <p className='Contact_icons-title'>ADDRESS</p>
                            </Col>
                            <Col xs={12}>
                                <p className='Contact_icons-text p-0 m-0'>
                                    Bison Aviation, LLC
                                </p>
                                <p className='Contact_icons-text p-0 m-0'>
                                    400 Boerne Stage Airfield
                                </p>
                                <p className='Contact_icons-text p-0 m-0'>
                                    Boerne, TX 78006
                                </p>
                            </Col>
                        </Row>
                    </Col>

                    {/*   EMAIL ICON/TEXT   */}
                    <Col md={4} sm={12} className='Contact_responsive-padding '>
                        <Row>
                            <Col xs={12}>
                                <i className="Contact_icons fal fa-envelope"> </i>
                            </Col>
                            <Col xs={12} className='my-3'>
                                <p className='Contact_icons-title'>EMAIL</p>
                            </Col>
                            <Col xs={12}>
                                <p className='Contact_icons-text p-0 m-0'>
                                    info@BisonAviation.com
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className='my-5 pt-5' style={{color: 'red'}}>
                    <Col className='text-center' xs={12}>
                        IF YOU HAVE ANY QUESTIONS
                    </Col>
                    <Col className='text-center' xs={12}>
                        PLEASE DO NOT HESITATE TO SEND US A MESSAGE
                    </Col>
                </Row>

                <Row className='mb-5'>
                    {/*    EMAIL FORM     */}
                    <Col md={6} xs={12}>
                        <Form className='global_blue'>
                            {/*EMAIL*/}
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com"/>
                            </Form.Group>

                            {/*FIRST NAME*/}
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="firstName" placeholder="name@example.com"/>
                            </Form.Group>

                            {/*LAST NAME*/}
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="lastName" placeholder="name@example.com"/>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control as="select">
                                    <option>Customer Support</option>
                                    <option>Sales Marketing</option>
                                    <option>Job Opportunities</option>
                                    <option>Product Support</option>
                                    <option>Suggestions</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={7}/>
                            </Form.Group>
                            <Button className='global_blood-red-bg' variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>

                    {/*      MAP     */}
                    <Col md={6} xs={12} className='Contact_responsive-map'>
                        <iframe width="100%" height="560"
                                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=400%20sw%20boerne%20stage%airfield%20boerne%20tx%2078006+(Bison%20Aviation)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"><a
                            href="https://www.maps.ie/map-my-route/">Draw map route</a></iframe>
                    </Col>
                </Row>


            </Container>


        </>

    )

};

export default ContactInfo