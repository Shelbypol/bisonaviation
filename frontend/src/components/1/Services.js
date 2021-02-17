import React from "react";
import '../../style/1/Services.css'
import '../../style/flag.scss'
import {Button, Col, Container, Row} from "react-bootstrap";
import {Jumbotron} from "reactstrap";
import Zoom from 'react-reveal/Zoom';

const Services = ({title1, title2, title3, title4, showTag}) => {
    return (

        // <Jumbotron className='m-0 p-0 Services_NavBg bg-white d-flex align-content-stretch'
        //            fluid>
        <Jumbotron className='m-0 p-0 d-flex align-content-stretch'
                   fluid>

            <Container className='p-0 fluid'>
                <Row className='mt-5'>

                    <Col xs={8} className='d-flex justify-content-start'>
                        <Col xs={6}>
                            <Row className='mb-5'>
                                <Col xs={2} className='d-flex justify-content-center align-items-center mt-3'>
                                    <i className='fas fa-arrow-alt-circle-down' style={{fontSize: '3em'}}> </i>
                                </Col>
                                <Col xs={10}>
                                    <Col className='Services_nav_hoverTitle mb-3'>
                                        <Zoom>
                                            <Col className='Services_nav_overlay'>
                                                {showTag ?
                                                    <>
                                                        {/*<p className='flag red mt-n1 mb-0 mx-0'>NEW!</p>*/}
                                                        <p className='Services_nav_text'>{title1}</p>
                                                    </>
                                                    : (
                                                        <p className='Services_nav_text global_accentFont'>{title1}</p>
                                                    )
                                                }
                                            </Col>
                                        </Zoom>
                                    </Col>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
                                        repellat.</p>
                                </Col>
                            </Row>

                            <Row className='mb-5'>
                                <Col xs={2} className='d-flex justify-content-center align-items-center mt-3'>
                                    <i className='fas fa-arrow-alt-circle-down' style={{fontSize: '3em'}}> </i>
                                </Col>
                                <Col xs={10}>
                                    <Col className='Services_nav_hoverTitle mb-3'>
                                        <Zoom>
                                            <Col className='Services_nav_overlay'>

                                                <p className='Services_nav_text global_accentFont'>{title2}</p>

                                            </Col>
                                        </Zoom>
                                    </Col>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
                                        repellat.</p>
                                </Col>
                            </Row>


                        </Col>

                        <Col xs={6}>
                            <Row className='mb-5'>
                                <Col xs={2} className='d-flex justify-content-center align-items-center mt-3'>
                                    <i className='fas fa-arrow-alt-circle-down' style={{fontSize: '3em'}}> </i>
                                </Col>
                                <Col xs={10}>
                                    <Col className='Services_nav_hoverTitle mb-3'>
                                        <Zoom>
                                            <Col className='Services_nav_overlay'>

                                                <p className='Services_nav_text global_accentFont'>{title3}</p>

                                            </Col>
                                        </Zoom>
                                    </Col>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
                                        repellat.</p>
                                </Col>
                            </Row>

                            <Row className='mb-5'>
                                <Col xs={2} className='d-flex justify-content-center align-items-center mt-3'>
                                    <i className='fas fa-arrow-alt-circle-down' style={{fontSize: '3em'}}> </i>
                                </Col>
                                <Col xs={10}>
                                    <Col className='Services_nav_hoverTitle mb-3'>
                                        <Zoom>
                                            <Col className='Services_nav_overlay'>

                                                <p className='Services_nav_text global_accentFont'>{title4}</p>

                                            </Col>
                                        </Zoom>
                                    </Col>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
                                        repellat.</p>
                                </Col>
                            </Row>

                        </Col>
                    </Col>


                    <Col xs={4}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolores dolorum earum
                            eveniet ex hic itaque laboriosam magni minus nihil pariatur perspiciatis, porro quaerat
                            quasi
                            quo repudiandae rerum sint veritatis?</p>
                    </Col>


                </Row>
            </Container>

        </Jumbotron>

    )
};

export default Services



