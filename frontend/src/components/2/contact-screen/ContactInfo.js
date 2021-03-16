import React from 'react'
import {Container, Row, Col, Form} from "react-bootstrap";
import SocialIcons from "../../SocialIcons";

const ContactInfo = () => {
    return (
        <>
            <Container>
                <Row className='text-center text-white'>
                    <Col xs={4}>
                        phone
                    </Col>
                    <Col xs={4}>
                        address
                    </Col>
                    <Col xs={4}>
                        email
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center text-white' xs={12}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, sequi!
                    </Col>
                    <Col className='text-center text-white' xs={12}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque fuga illo, maxime modi officiis.
                    </Col>
                </Row>

                <Row>
                {/*    EMAIL FORM     */}
                    <Col xs={6}>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
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
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Col>

                {/*      MAP     */}
                <Col xs={6}>
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