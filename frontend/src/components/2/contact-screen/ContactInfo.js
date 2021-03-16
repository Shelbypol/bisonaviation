import React from 'react'
import {Container, Row, Col, Form} from "react-bootstrap";
import SocialIcons from "../../SocialIcons";

const ContactInfo = () => {
    return (
        <>
            <Container>
                <h1 className='Contact_title'>Boerne Stage Airfield - 5C1</h1>
                <Row className='text-center text-white my-5'>

                    {/*   PHONE ICON/TEXT   */}
                    <Col xs={4}>
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
                                   <span className='Contact_icons-title'>AOG:</span> 888-SOS-BISON (888-767-2476)
                                </p>


                            </Col>
                        </Row>
                    </Col>

                    {/*   ADDRESS ICON/TEXT   */}
                    <Col xs={4} className='Contact_border'>
                        <Row>
                            <Col xs={12}>
                                <i className="Contact_icons fal fa-map-marker-alt"> </i>
                            </Col>
                            <Col xs={12} className='my-3 Contact_icons-title'>
                                <p>ADDRESS</p>
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
                    <Col xs={4}>
                        <Row>
                            <Col xs={12}>
                                <i className="Contact_icons fal fa-envelope"> </i>
                            </Col>
                            <Col xs={12} className='my-3 Contact_icons-title'>
                                <p>EMAIL</p>
                            </Col>
                            <Col xs={12}>
                                <p className='Contact_icons-text p-0 m-0'>
                                    info@BisonAviation.com
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center text-white' xs={12}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, sequi!
                    </Col>
                    <Col className='text-center text-white' xs={12}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque fuga illo, maxime
                        modi officiis.
                    </Col>
                </Row>

                <Row>
                    {/*    EMAIL FORM     */}
                    <Col md={6} xs={12}>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com"/>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Example select</Form.Label>
                                <Form.Control as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={5}/>
                            </Form.Group>
                        </Form>
                    </Col>

                    {/*      MAP     */}
                    <Col md={6} xs={12}>
                        <iframe width="100%" height="550"
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