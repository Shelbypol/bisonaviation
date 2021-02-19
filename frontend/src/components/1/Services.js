import React from "react";
import '../../style/1/Services.css'
import '../../style/flag.scss'
import {Button, Col, Container, Row} from "react-bootstrap";
import {Jumbotron} from "reactstrap";
import Zoom from 'react-reveal/Zoom';

const Services = ({title1, title2, title3, title4, showTag}) => {
    return (

        <>
            {/*<Jumbotron className='m-0 p-0 global_cultured-bg'*/}
            {/*           fluid>*/}
            {/*        <h1 className='global_accentFont'>Services offered</h1>*/}
            {/*</Jumbotron>*/}

            <Jumbotron className='m-0 p-0 d-flex align-content-stretch global_cultured-bg'
                       fluid>
                <Container className='p-0 fluid'>

                    {/*<Row className='p-0 mt-5'>*/}
                    {/*    <Col className='p-0 m-0'>*/}
                    {/*        <h4 className='Services_title'>*/}
                    {/*            Services Offered*/}
                    {/*        </h4>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}


                    <Row className=' Services_row d-flex align-content-center mx-auto mt-5'>

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
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    Perferendis,
                                                    repellat.</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row className='mb-5'>
                                    <Col xs={12}>
                                        <Col xs={12} className='Services_nav_hoverTitle mb-3'>
                                            <Zoom>
                                                <Col className='Services_nav_overlay '>
                                                    <p className='Services_nav_text global_accentFont'>{title2}</p>
                                                </Col>
                                            </Zoom>
                                        </Col>
                                        <Row xs={12}>
                                            <Col xs={2} className='d-flex justify-content-center mt-3'>
                                                <i className='far fa-headset global_blood-red'
                                                   style={{fontSize: '3em'}}> </i>
                                            </Col>
                                            <Col xs={8}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    Perferendis,
                                                    repellat.</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>


                            </Col>

                            <Col xs={6}>
                                <Row className='mb-5'>
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
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    Perferendis,
                                                    repellat.</p>
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
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                    Perferendis,
                                                    repellat.</p>
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
                                    <Button className='mt-3 global_blood-red-bg global_cultured Services_btn'>
                                        Request Service
                                    </Button>
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



