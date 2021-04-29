import React from "react";
import '../../style/2/Services.css'
import '../../style/flag.scss'
import {Button, Col, Row, Card, Container} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {Jumbotron} from "reactstrap";
import Fade from 'react-reveal/Fade';

const Services = () => {
    return (

        <>
            <Row
                className='Services_row text-white text-center p-0 m-0 d-flex justify-content-center align-content-center'>

                <Col lg={3} xs={12} className='Services_col global_cursor d-flex align-items-center Services_bg h-auto'>
                    <Fade left>
                        <Card className='p-2 border-0 w-100 bg-transparent'>
                            <Card.Body>
                                <Card.Title className='mx-auto my-0 w-25 rounded-circle px-2 py-3 global_blood-red-bg'>
                                    <i className='Services_icon far fa-tools'> </i>
                                </Card.Title>
                                <Card.Subtitle className='mx-auto my-3'>
                                    <h5 className='Services_nav_text'>Maintenance</h5>
                                </Card.Subtitle>
                                <Card.Text>
                                    <p className='Services_description'>
                                        Simple skin replacement, structures, fabrication, CNC machining, to laser
                                        engraving
                                        & 3D
                                        printing
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Fade>
                </Col>


                <Col lg={3} xs={12} className='Services_col global_cursor d-flex align-items-center Services_bg h-auto'>
                    <Fade>
                    <Card className='p-2 border-0 w-100 bg-transparent'>
                        <Card.Body>
                            <Card.Title className='mx-auto my-0 w-25 rounded-circle px-2 py-3 global_blood-red-bg'>
                                <i className='Services_icon fal fa-tachometer-alt-fastest'> </i>
                            </Card.Title>
                            <Card.Subtitle className='mx-auto my-3'>
                                <h5 className='Services_nav_text'>Avionics</h5>
                            </Card.Subtitle>
                            <Card.Text>
                                <p className='Services_description'>
                                    From minor repairs to complete panel upgrades. All services are performed in
                                    house.
                                    <span>
                                    </span>
                                </p>
                            </Card.Text>
                            <Card.Link href="/products"
                                       className='w-50 mt-n2 rounded px-2 mx-auto px-auto Services_link'>browse
                                products
                            </Card.Link>
                        </Card.Body>
                    </Card>
                    </Fade>
                </Col>

                <Col lg={3} xs={12} className='Services_col global_cursor d-flex align-items-center Services_bg h-auto'>
                    <Fade right>
                        <Card className='p-2 border-0 w-100 bg-transparent'>
                            <Card.Body>
                                <Card.Title className='mx-auto my-0 w-25 rounded-circle px-2 py-3 global_blood-red-bg'>
                                    <i className='Services_icon far fa-tools'> </i>
                                </Card.Title>
                                <Card.Subtitle className='mx-auto my-3'>
                                    <h5 className='Services_nav_text'>EO/IR Flir</h5>
                                </Card.Subtitle>
                                <Card.Text>
                                    <p className='Services_description'>
                                        World leader in legacy airborne EO / IR equipment
                                                            service and sales.
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Fade>
                </Col>
            </Row>


        </>

    )
};

export default Services



