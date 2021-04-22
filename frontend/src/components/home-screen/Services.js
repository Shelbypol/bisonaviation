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
            <Row className='Services_row text-white text-center my-0 d-flex justify-content-around'>

                <Col xs={12} className='mb-n3 pb-0' style={{backgroundColor: 'rgba(0,0,0,.4)', height: '10vh'}}>

                </Col>

                <Col md={3} className='mt-n5 d-flex justify-content-center global_cursor'>
                    <Card className='p-2 border-0 w-100 Services_bg'>
                        <Card.Body>
                            <Card.Title className='mx-auto my-0 w-25 border rounded-circle px-2 py-3 global_blood-red-bg'>
                                <i className='Services_icon fas fa-cart-arrow-down'> </i>
                            </Card.Title>
                            <Card.Subtitle className='mx-auto my-3'>
                                <h5 className='Services_nav_text'>Maintenance</h5>
                            </Card.Subtitle>
                            <Card.Text>
                                <h6 className='Services_description'>
                                    Simple skin replacement, structures, fabrication, CNC machining, to laser engraving
                                    & 3D
                                    printing
                                </h6>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3} className='mt-n5 d-flex justify-content-center global_cursor'>
                    <Card className='p-2 border-0 w-100 Services_bg'>
                        <Card.Body>
                            <Card.Title className='mx-auto my-0 w-25 border rounded-circle px-2 py-3 global_blood-red-bg'>
                                    <i className='Services_icon fas fa-cart-arrow-down'> </i>
                            </Card.Title>
                            <Card.Subtitle className='mx-auto my-3'>
                                <h5 className='Services_nav_text'>Avionics</h5>
                            </Card.Subtitle>
                            <Card.Text>
                                <h6 className='Services_description'>
                                    From minor repairs to complete panel upgrades. All services are performed in
                                    house.
                                    <span>
                                    </span>
                                </h6>
                            </Card.Text>
                            <Card.Link href="/products" className='w-50 mt-n2 px-2 mx-auto px-auto Services_link'>browse
                                products
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3} className='mt-n5 d-flex justify-content-center global_cursor'>
                    <Card className='p-2 border-0 w-100 Services_bg'>
                        <Card.Body
                            className=''>
                            <Card.Title className='mx-auto my-0 w-25 border rounded-circle px-2 py-3 global_blood-red-bg'>
                                <i className='Services_icon fas fa-cart-arrow-down'> </i>
                            </Card.Title>
                            <Card.Subtitle className='mx-auto my-3'>
                                <h5 className='Services_nav_text'>EO/IR Flir</h5>
                            </Card.Subtitle>
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



