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

                <Col md={4} className='d-flex justify-content-center'>
                    <Card className='bg-transparent border-0 w-100'>
                            <Card.Title className='Services_nav_text mx-auto'> Maintenance</Card.Title>
                        <Card.Body className='Services_text w-100 h-100 d-flex justify-content-center align-items-center'>
                            <Card.Text>
                                Simple skin replacement, structures, fabrication, CNC machining, to laser engraving & 3D
                                printing
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className='d-flex justify-content-center'>
                    <Card className='bg-transparent border-0 w-100'>
                        <Card.Title className='Services_nav_text mx-auto '> Avionics</Card.Title>
                        <Card.Body
                            className='Services_text w-100 h-100 d-block d-flex justify-content-center align-items-center'>
                            <Card.Text>
                                From minor repairs to complete panel upgrades. All services are performed in
                                house. <span><Card.Link href="/products" className='mt-n2 mx-2 global_blue'>browse
                                products
                            </Card.Link></span>
                            </Card.Text>


                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className='d-flex justify-content-center'>
                    <Card className='bg-transparent border-0 w-100'>
                        <Card.Title className='Services_nav_text mx-auto'>EO/IR Flir</Card.Title>
                        <Card.Body
                            className='Services_text w-100 h-100 d-flex justify-content-center align-items-center'>
                            <Card.Text>
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



