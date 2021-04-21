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
            <Row className='text-white text-center my-5'>

                {/*<Col md={6} lg={3} className='d-flex justify-content-center global_cursor'>*/}
                {/*    <Card className='bg-transparent border-0 w-100'>*/}
                {/*        <Card.Body>*/}
                {/*            <Card.Title className='Services_nav_text m-0'> Products</Card.Title>*/}
                {/*            <div className='Services_text w-100 h-100 d-flex align-items-center justify-content-center'>*/}
                {/*                <Card.Text*/}
                {/*                    className='my-0 p-0'>*/}
                {/*                    Authorized Garmin dealer.*/}
                {/*                </Card.Text>*/}
                {/*                <br/>*/}
                {/*          */}
                {/*            </div>*/}
                {/*        </Card.Body>*/}
                {/*    </Card>*/}
                {/*</Col>*/}

                <Col md={6} lg={4} className='d-flex justify-content-center'>
                    <Card className='bg-transparent border-0 w-100'>
                        <Card.Body>
                            <Card.Title className='Services_nav_text mx-auto'> Maintenance</Card.Title>
                            <Card.Text className='Services_text w-100 h-100 d-flex justify-content-center align-items-center'>
                                Simple skin replacement, structures, fabrication, CNC machining, to laser engraving & 3D
                                printing
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={4} className='d-flex justify-content-center'>
                    <Card className='bg-transparent border-0 w-100'>
                        <Card.Body>
                            <Card.Title className='Services_nav_text mx-auto'> Avionics</Card.Title>
                            <Card.Text className='Services_text w-100 h-100 d-flex justify-content-center align-items-center'>
                                From minor repairs to complete panel upgrades. All services are performed in
                                house.
                            </Card.Text>
                        </Card.Body>
                        <Card.Link href="/products" className='global_blue'>browse
                            products
                        </Card.Link>
                    </Card>
                </Col>

                <Col md={6} lg={4} className='d-flex justify-content-center'>
                    <Card className='bg-transparent border-0 w-100'>
                        <Card.Body>
                            <Card.Title className='Services_nav_text mx-auto'>EO/IR Flir</Card.Title>
                            <Card.Text className='Services_text w-100 h-100 d-flex justify-content-center align-items-center'>
                                World leader in legacy airborne EO / IR equipment
                                service and sales.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </>

    )
};

export default Services



