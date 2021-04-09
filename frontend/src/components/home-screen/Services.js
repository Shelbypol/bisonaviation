import React from "react";
import '../../style/2/Services.css'
import '../../style/flag.scss'
import {Button, Col, Row} from "react-bootstrap";
import {Jumbotron} from "reactstrap";
import Zoom from 'react-reveal/Zoom';

const Services = () => {
    return (

        <>
            {/*<Container className='p-0' fluid>*/}


            <Row className=' Services_row px-5 pt-5 mb-3 global_blue d-flex justify-content-between'>

                {/*<Col lg={10} xs={12} className='d-flex justify-content-center'>*/}
                {/*    <Col xs={12} md={6}>*/}
                {/*<Row className='mb-5'>*/}
                <Col xs={12} md={4}>
                    <Col xs={12} className='Services_nav_hoverTitle mb-3'>
                        <Zoom>
                            <Col className='Services_nav_overlay'>
                                <p className='Services_nav_text' style={{color: 'white'}}>Products</p>
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
                    {/*</Col>*/}
                    {/*</Row>*/}

                    {/*<Row className='mb-5 pt-4'>*/}
                    {/*<Col xs={12} md={4}>*/}
                    <Col xs={12} className='Services_nav_hoverTitle my-5'>
                        <Zoom>
                            <Col className='Services_nav_overlay'>
                                <p className='Services_nav_text' style={{color: 'white'}}>Maintenance</p>
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
                                Simple skin replacements, structures fabrication, CNC machining, to laser engraving & 3D
                                printing.
                            </p>
                        </Col>
                    </Row>
                </Col>
                {/*</Row>*/}
                {/*</Col>*/}

                <Col xs={12} md={4}>

                    <Row className='mb-5  '>
                        <Col xs={12}>
                            <Col xs={12} className='Services_nav_hoverTitle mb-3'>
                                <Zoom>
                                    <Col className='Services_nav_overlay'>
                                        <p className='Services_nav_text' style={{color: 'white'}}>Avionics</p>
                                    </Col>
                                </Zoom>
                            </Col>
                            <Row xs={12}>
                                <Col xs={2} className='d-flex justify-content-center mt-3'>
                                    <i className='far fa-headset global_blood-red'
                                       style={{fontSize: '3em'}}> </i>
                                </Col>
                                <Col xs={8}>
                                    <p>
                                        From minor repairs to complete panel upgrades. All services are performed in
                                        house...
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
                                        <p className='Services_nav_text' style={{color: 'white'}}>EO/IR Flir</p>
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
                                        Bison Aviation is the world's leader in legacy airborne EO / IR equipment
                                        service and sales.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Col>
                {/*</Col>*/}


                <Col xs={12} md={4} className='d-none d-md-block'>
                    <Row>
                        <Col xs={12} className='Services_form'>

                        </Col>
                        <Col xs={12}>
                            <Zoom>
                                <Button className='mt-3 ml-n4 global_blood-red-bg global_cultured Services_btn'>
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



