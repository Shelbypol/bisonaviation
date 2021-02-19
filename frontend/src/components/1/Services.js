import React from "react";
import '../../style/1/Services.css'
import '../../style/flag.scss'
import {Button, Col, Container, Row} from "react-bootstrap";
import {Jumbotron} from "reactstrap";
import Zoom from 'react-reveal/Zoom';
import Link from "react-router-bootstrap";

const Services = ({title1, title2, title3, title4, showTag}) => {
    return (

        <>
            <Jumbotron className='m-0 p-0 d-flex align-content-stretch bg-white'
                       fluid>
                <Container className='p-0 fluid'>

                    {/*<Row className='p-0 mt-5 mb-0'>*/}
                    {/*    <Col className='p-0 m-0'>*/}
                    {/*        <p className='Services_title text-muted'>*/}
                    {/*            Services Offered*/}
                    {/*        </p>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}


                    <Row className=' Services_row d-flex align-content-center mx-auto mt-5 mb-3 '>

                        <Col xs={10} className='d-flex justify-content-end'>
                            <Col xs={6} className=''>
                                <Row className='mb-5'>
                                    <Col xs={12}>
                                        <Col xs={12} className='Services_nav_hoverTitle mb-3'>
                                            <Zoom>
                                                <Col className='Services_nav_overlay'>
                                                    <p className='Services_nav_text global_accentFont'>{title1}</p>
                                                </Col>
                                            </Zoom>
                                        </Col>
                                        <Row xs={12}>
                                            <Col xs={2} className='d-flex justify-content-center mt-3'>
                                                <i className='far fa-tablet-rugged global_blood-red'
                                                   style={{fontSize: '3em'}}> </i>
                                            </Col>
                                            <Col xs={8}>
                                                <p>
                                                    Authorized garmin dealer.
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row className='mb-5 pt-4'>
                                    <Col xs={12}>
                                        <Col xs={12} className='Services_nav_hoverTitle mb-3'>
                                            <Zoom>
                                                <Col className='Services_nav_overlay'>
                                                    <p className='Services_nav_text global_accentFont'>{title3}</p>
                                                </Col>
                                            </Zoom>
                                        </Col>
                                        <Row xs={12}>
                                            <Col xs={2} className='d-flex justify-content-center mt-3'>
                                                <i className='fas fas fa-cogs global_blood-red'
                                                   style={{fontSize: '3em'}}> </i>
                                            </Col>
                                            <Col xs={8}>
                                                <p>
                                                    Simple skin replacements, structures fabrication, CNC machining, to laser engraving & 3D printing.
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>



                            </Col>

                            <Col xs={6}>


                                <Row className='mb-5  '>
                                    <Col xs={12}>
                                        <Col xs={12} className='Services_nav_hoverTitle mb-3'>
                                            <Zoom>
                                                <Col className='Services_nav_overlay '>
                                                    <p className='Services_nav_text global_accentFont'>{title2}</p>
                                                </Col>
                                            </Zoom>
                                        </Col>
                                        <Row xs={12} >
                                            <Col xs={2} className='d-flex justify-content-center mt-3'>
                                                <i className='far fa-headset global_blood-red'
                                                   style={{fontSize: '3em'}}> </i>
                                            </Col>
                                            <Col xs={8}>
                                                <p>
                                                    From minor repairs to complete panel upgrades. All services are performed in house...
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>


                                <Row className='mb-5'>
                                    <Col xs={12}>
                                        <Col xs={12} className='Services_nav_hoverTitle mb-3'>
                                            <Zoom>
                                                <Col className='Services_nav_overlay'>
                                                    <p className='Services_nav_text global_accentFont'>{title4}</p>
                                                </Col>
                                            </Zoom>
                                        </Col>
                                        <Row xs={12}>
                                            <Col xs={2} className='d-flex justify-content-center mt-3'>
                                                <i className='far fa-camera-home global_blood-red'
                                                   style={{fontSize: '3em'}}> </i>
                                            </Col>
                                            <Col xs={8}>
                                                <p>
                                                    Bison Aviation is the world's leader in legacy airborne EO / IR equipment service and sales.
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </Col>
                        </Col>


                        <Col xs={2} className='mt-n5'>
                            <Row>
                                <Col xs={12} className='Services_form'>

                                </Col>
                                <Col xs={12}>
                                    <Zoom>
                                        <Button className='mt-3 global_blood-red-bg global_cultured Services_btn'>
                                            Request Service
                                        </Button>
                                    </Zoom>
                                </Col>
                            </Row>
                        </Col>


                    </Row>
                </Container>

            </Jumbotron>
        </>

    )
};

export default Services



