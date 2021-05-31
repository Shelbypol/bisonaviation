import React from "react";
import './HomeServices.css'
import {Col, Row, Card} from "react-bootstrap";
import Fade from 'react-reveal/Fade';

const HomeServices = () => {
    return (

        <>
            <Row className='text-white text-center my-5'>

                <Col lg={4} xs={12}
                     className='HomeServices_col global_cursor d-flex align-items-start h-auto justify-content-center'>
                    <Fade left>
                        <Card className='p-2 border-0 w-100 bg-transparent'>
                            <Card.Body className=''>
                                <Card.Title className='fa-stack fa-2x ml-n4'>
                                    <i className="fas fa-square fa-stack-2x global_blood-red "> </i>
                                    <i className='far fa-tools fa-stack-2x global_cultured '> </i>
                                </Card.Title>
                                <Card.Subtitle className='mx-auto my-3'>
                                    <h5 className='HomeServices_nav_text'>Maintenance</h5>
                                </Card.Subtitle>
                                <Card.Text className='d-none d-md-block'>
                                    <p className='HomeServices_description'>
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

                <Col lg={4} xs={12}
                     className='HomeServices_col-avionics global_cursor d-flex align-items-start h-auto justify-content-center'>
                    <Fade>
                        <Card className='p-2 border-0 w-100 bg-transparent'>
                            <Card.Body>
                                <Card.Title className='fa-stack fa-2x ml-n4'>
                                    <i className="fas fa-circle fa-stack-2x global_blood-red "> </i>
                                    <i className='fal fa-tachometer-alt-fastest fa-stack-2x global_cultured'> </i>
                                </Card.Title>
                                <Card.Subtitle className='mx-auto my-3'>
                                    <h5 className='HomeServices_nav_text'>Avionics</h5>
                                </Card.Subtitle>
                                <Card.Text className='d-none d-md-block'>
                                    <p className='HomeServices_description'>
                                        From minor repairs to complete panel upgrades. All services are performed in
                                        house.
                                        <span>
                                    </span>
                                    </p>
                                </Card.Text>
                                <Card.Link href="/products" className='d-none d-md-block px-5 py-2 global_goldenrodtxt-btn'>
                                    browse
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Fade>
                </Col>

                <Col lg={4} xs={12}
                     className='HomeServices_col global_cursor d-flex align-items-start h-auto justify-content-center'>
                    <Fade right>
                        <Card className='p-2 border-0 w-100 bg-transparent'>
                            <Card.Body>
                                <Card.Title className='fa-stack fa-2x ml-n3'>
                                    <i className="fas fa-circle fa-stack-2x global_blood-red "> </i>
                                    <i className='fal far fa-camera-home fa-stack-2x global_cultured '> </i>
                                </Card.Title>

                                <Card.Subtitle className='mx-auto my-3'>
                                    <h5 className='HomeServices_nav_text'>EO/IR Flir</h5>
                                </Card.Subtitle>
                                <Card.Text className='d-none d-md-block'>
                                    <p className='HomeServices_description'>
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

export default HomeServices



