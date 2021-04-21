import React from "react";
import '../../style/2/Services.css'
import '../../style/flag.scss'
import {Button, Col, Row, Card} from "react-bootstrap";
import {Jumbotron} from "reactstrap";
import Zoom from 'react-reveal/Zoom';

const Services = () => {
    return (

        <>
            {/*<Container className='p-0 min-vh-100' fluid>*/}


            <Row className=' Services_row p-5 mb-3 d-flex justify-content-between text-white'>
                <Col xs={3}>
                    <Card style={{width: '18rem'}} className='bg-transparent border-0'>
                        <Card.Body>
                            <Card.Title><i className='far fa-tablet-rugged Services_icon'> </i> Products</Card.Title>
                            <Card.Text>
                                Authorized Garmin dealer.
                            </Card.Text>
                            <Card.Link href="/products">Browse Products</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={3}>
                    <Card style={{width: '18rem'}} className='bg-transparent border-0'>
                        <Card.Body>
                            <Card.Title>  <i className='far fa-tablet-rugged Services_icon'> </i> Products</Card.Title>
                            <Card.Text>
                                Authorized Garmin dealer.
                            </Card.Text>
                            <Card.Link href="/products">Browse Products</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={3}>
                    <Card style={{width: '18rem'}} className='bg-transparent border-0'>
                        <Card.Body>
                            <Card.Title><i className='far fa-tablet-rugged Services_icon'> </i> Products</Card.Title>
                            <Card.Text>
                                Authorized Garmin dealer.
                            </Card.Text>
                            <Card.Link href="/products">Browse Products</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={3}>
                    <Card style={{width: '18rem'}} className='bg-transparent border-0'>
                        <Card.Body>
                            <Card.Title><i className='far fa-tablet-rugged Services_icon'> </i> Products</Card.Title>
                            <Card.Text>
                                Authorized Garmin dealer.
                            </Card.Text>
                            <Card.Link href="/products">Browse Products</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            {/*======================   PRODUCTS / MAINTENANCE COL     ======================*/}

            {/*<Col xs={12} md={4} className=''>*/}
            {/*    <Col xs={3}>*/}
            {/*        <Col className='Services_nav_hoverTitle mb-3'>*/}
            {/*            <Zoom>*/}
            {/*                <Col className='d-flex justify-content-start'>*/}
            {/*                    <p className='Services_nav_text d-flex justify-content-start Services_first-col'>Products</p>*/}
            {/*                </Col>*/}

            {/*            </Zoom>*/}
            {/*        </Col>*/}
            {/*        <Row xs={12} className='Services_text-row'>*/}
            {/*            <Col xs={2} className='d-flex justify-content-center mt-3'>*/}
            {/*                <i className='far fa-tablet-rugged Services_icon'> </i>*/}
            {/*            </Col>*/}
            {/*            <Col xs={8}>*/}
            {/*                <p>*/}
            {/*                    Authorized Garmin dealer.*/}
            {/*                </p>*/}
            {/*            </Col>*/}
            {/*        </Row>*/}
            {/*    </Col>*/}

            {/*    <Col xs={3}>*/}
            {/*        <Col className='Services_nav_hoverTitle mb-3'>*/}
            {/*            <Zoom>*/}
            {/*                <Col className='d-flex justify-content-center'>*/}
            {/*                    <p className='Services_nav_text d-flex justify-content-center Services_first-col'>Maintenance</p>*/}
            {/*                </Col>*/}
            {/*            </Zoom>*/}
            {/*        </Col>*/}
            {/*        <Row xs={12} className='Services_text-row'>*/}
            {/*            <Col xs={2} className='d-flex justify-content-center mt-3'>*/}
            {/*                <i className='far fa-camera-home Services_icon'> </i>*/}
            {/*            </Col>*/}
            {/*            <Col xs={8}>*/}
            {/*                <p>*/}
            {/*                    Simple skin replacement, structures, fabrication, CNC machining, to laser engraving & 3D*/}
            {/*                    printing*/}
            {/*                </p>*/}
            {/*            </Col>*/}
            {/*        </Row>*/}
            {/*    </Col>*/}


            {/*    /!*</Col>*!/*/}


            {/*    /!*<Col xs={12} md={4} className=''>*!/*/}
            {/*    <Col xs={3}>*/}
            {/*        <Col className='Services_nav_hoverTitle mb-3'>*/}
            {/*            <Zoom>*/}
            {/*                <Col>*/}
            {/*                    <p className='Services_nav_text d-flex justify-content-center '>Avionics</p>*/}
            {/*                </Col>*/}
            {/*            </Zoom>*/}
            {/*        </Col>*/}
            {/*        <Row xs={12} className='Services_text-row'>*/}
            {/*            <Col xs={2} className='d-flex justify-content-center mt-3'>*/}
            {/*                <i className='far fa-headset Services_icon'> </i>*/}
            {/*            </Col>*/}
            {/*            <Col xs={8}>*/}
            {/*                <p>*/}
            {/*                    From minor repairs to complete panel upgrades. All services are performed in*/}
            {/*                    house...*/}
            {/*                </p>*/}
            {/*            </Col>*/}
            {/*        </Row>*/}
            {/*    </Col>*/}
            {/*    <Col xs={3}>*/}
            {/*        <Col className='Services_nav_hoverTitle mb-3'>*/}
            {/*            <Zoom>*/}
            {/*                <Col>*/}
            {/*                    <p className='Services_nav_text d-flex justify-content-center'>EO/IR Flir</p>*/}
            {/*                </Col>*/}
            {/*            </Zoom>*/}
            {/*        </Col>*/}
            {/*        <Row xs={12} className='Services_text-row'>*/}
            {/*            <Col xs={2} className='d-flex justify-content-center mt-3'>*/}
            {/*                <i className='far fa-camera-home Services_icon'> </i>*/}
            {/*            </Col>*/}
            {/*            <Col xs={8}>*/}
            {/*                <p>*/}
            {/*                    Bison Aviation is the world's leader in legacy airborne EO / IR equipment*/}
            {/*                    service and sales.*/}
            {/*                </p>*/}
            {/*            </Col>*/}
            {/*        </Row>*/}
            {/*    </Col>*/}

            {/*</Row>*/}
        </>

    )
};

export default Services



