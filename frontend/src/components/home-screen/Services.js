import React from "react";
import '../../style/2/Services.css'
import '../../style/flag.scss'
import {Button, Col, Row, Card, Container} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {Jumbotron} from "reactstrap";
import Zoom from 'react-reveal/Zoom';

const Services = () => {
    return (

        <>
            <Row className='text-white text-center my-5 mx-2'>
                {/*<Col xs={12} className='d-flex justify-content-center font-weight-lighter'>*/}
                {/*    <h3 className='Services_nav_text'>Services</h3>*/}
                {/*</Col>*/}

                <Col md={4} className='d-flex justify-content-center global_cursor'>
                    <Card className='bg-transparent border-0 w-100'>
                        <Card.Title className=' mx-auto my-0'><h5 className='Services_nav_text'>Maintenance</h5>
                        </Card.Title>
                        <Card.Body
                            className='Services_text w-100 h-100 d-flex justify-content-center align-items-center'>
                            <Card.Text className='text-uppercase'>
                                <h6 className=' Services_description'>
                                    Simple skin replacement, structures, fabrication, CNC machining, to laser engraving
                                    & 3D
                                    printing
                                </h6>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className='d-flex justify-content-center global_cursor'>
                    <Card className='bg-transparent border-0 w-100'>
                        <Card.Title className=' mx-auto my-0'><h5 className='Services_nav_text'>Avionics</h5>
                        </Card.Title>
                        <Card.Body
                            className='Services_text w-100 h-100 d-block d-flex justify-content-center align-items-center'>
                            <Card.Text>
                                <h6 className=' Services_description'>
                                    From minor repairs to complete panel upgrades. All services are performed in
                                    house. <span><Card.Link href="/products" className='mt-n2 mx-2 global_blue'>browse
                                products
                            </Card.Link></span>
                                </h6>
                            </Card.Text>


                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className='d-flex justify-content-center global_cursor'>
                    <Card className='bg-transparent border-0 w-100'>
                        <Card.Title className=' mx-auto my-0'><h5 className='Services_nav_text'>EO/IR Flir</h5>
                        </Card.Title>
                        <Card.Body
                            className='Services_text w-100 h-100 d-flex justify-content-center align-items-center'>
                            <Card.Text>
                                <h6 className=' Services_description'>
                                    World leader in legacy airborne EO / IR equipment
                                    service and sales.
                                </h6>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </>

    )
};

export default Services



