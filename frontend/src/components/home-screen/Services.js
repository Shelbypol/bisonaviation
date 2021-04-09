import React from "react";
import '../../style/2/Services.css'
import '../../style/flag.scss'
import {Button, Col, Row} from "react-bootstrap";
import {Jumbotron} from "reactstrap";
import Zoom from 'react-reveal/Zoom';

const Services = () => {
    return (

        <>
            {/*<Container className='p-0 min-vh-100' fluid>*/}


            <Row className=' Services_row p-5 mb-3 text-white d-flex justify-content-between'>

                {/*======================   PRODUCTS / MAINTENANCE COL     ======================*/}

                <Col xs={12} md={4} className=''>
                    <Col xs={12} className='Services_nav_hoverTitle mb-3'>
                        <Zoom>
                            <Col className='d-flex justify-content-center'>
                                <p className='Services_nav_text d-flex justify-content-end Services_first-col'>Products</p>
                            </Col>
                        </Zoom>
                    </Col>
                    <Row xs={12} className='Services_text-row'>
                        <Col xs={2} className='d-flex justify-content-center mt-3'>
                            <i className='far fa-tablet-rugged Services_icon'> </i>
                        </Col>
                        <Col xs={8}>
                            <p>
                                Authorized Garmin dealer.
                            </p>
                        </Col>
                    </Row>


                    <Col xs={12} className='Services_nav_hoverTitle mb-3'>
                        <Zoom>
                            <Col className='d-flex justify-content-center'>
                                <p className='Services_nav_text d-flex justify-content-end Services_first-col'>Maintenance</p>
                            </Col>
                        </Zoom>
                    </Col>
                    <Row xs={12} className='Services_text-row'>
                        <Col xs={2} className='d-flex justify-content-center mt-3'>
                            <i className='far fa-camera-home Services_icon'> </i>
                        </Col>
                        <Col xs={8}>
                            <p>
                                Simple skin replacement, structures, fabrication, CNC machining, to laser engraving & 3D printing
                            </p>
                        </Col>
                    </Row>


                </Col>


                <Col xs={12} md={4} className=''>
                    <Col xs={12} className='Services_nav_hoverTitle mb-3'>
                        <Zoom>
                            <Col>
                                <p className='Services_nav_text d-flex justify-content-start '>Avionics</p>
                            </Col>
                        </Zoom>
                    </Col>
                    <Row xs={12} className='Services_text-row'>
                        <Col xs={2} className='d-flex justify-content-center mt-3'>
                            <i className='far fa-headset Services_icon'> </i>
                        </Col>
                        <Col xs={8}>
                            <p>
                                From minor repairs to complete panel upgrades. All services are performed in
                                house...
                            </p>
                        </Col>
                    </Row>


                    <Col xs={12} className='Services_nav_hoverTitle mb-3'>
                        <Zoom>
                            <Col>
                                <p className='Services_nav_text d-flex justify-content-start'>EO/IR Flir</p>
                            </Col>
                        </Zoom>
                    </Col>
                    <Row xs={12} className='Services_text-row'>
                        <Col xs={2} className='d-flex justify-content-center mt-3'>
                            <i className='far fa-camera-home Services_icon'> </i>
                        </Col>
                        <Col xs={8}>
                            <p>
                                Bison Aviation is the world's leader in legacy airborne EO / IR equipment
                                service and sales.
                            </p>
                        </Col>
                    </Row>


                </Col>



                <Col xs={12} md={2} className='d-none d-md-block border '>
                    <Row>
                        <Col xs={12} className='Services_form mt-n5 d-flex justify-content-end-center'>

                        </Col>
                        <Col xs={12}>
                            <Zoom>
                                <Button to={'/contact'} className='mt-5 ml-n4 global_blue-bg global_cultured Services_btn'>
                                    Request Service
                                </Button>
                            </Zoom>
                        </Col>
                    </Row>
                </Col>


            </Row>
            {/*</Container>*/}

            {/*</Jumbotron>*/}
        </>

    )
};

export default Services



