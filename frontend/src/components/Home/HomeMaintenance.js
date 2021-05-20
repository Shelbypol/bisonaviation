import React from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import './HomeMaintenance.css';
import Zoom from 'react-reveal/Zoom';
import {LinkContainer} from "react-router-bootstrap";
import img1 from "../Maintenance/images/maintenance1.jpg";
import img2 from "../Maintenance/images/maintenance5.png";
import img3 from "../Maintenance/images/maintenance4.png";
import Fade from "react-reveal/Fade";


const HomeMaintenance = () => {

    return (
        <>

            <Row className=' global_cultured m-0 p-0'>
                {/*<Col xs={12} className='m-0 p-0'>*/}
                <Col xs={12} className=' p-0 mt-5 mx-0 mb-0'>


                <Row className='HomeMaintenance_image d-flex justify-content-between align-content-center mb-5'>
                        <Fade top>
                            <Col xs={12}
                                 className=' AvionicsHome_title-col d-sm-flex justify-content-sm-center global_blood-red-bg my-5'>
                                <h1 className='AvionicsHome_title text-white '>Maintenance</h1>
                            </Col>
                        </Fade>

                    {/*</Row>*/}


                    {/*<Row className='mb-5'>*/}
                        <Col md={8} xs={12} className='pt-5 mx-0 global_black-bg'>
                            <Zoom>
                                <Col xs={10} className='mb-2 mx-0 px-0'>
                                    <h1 className='global_white global_black-bg'>You depend on your aircraft to carry you and your
                                        passengers safely.</h1>

                                </Col>
                            </Zoom>

                            <Col xs={10} className='global_cursor mt-4 mx-0 px-0'>
                                <Zoom>
                                    <p className='global_white'>
                                        Whether it's time for a routine annual, a complete series of phase inspections
                                        or a
                                        pre-purchase inspection, Bison Aviation's team of FAA licensed technicians is
                                        ready
                                        to ensure that your aircraft is safe and airworthy for your next flight!

                                    </p>
                                </Zoom>
                            </Col>

                            <Col xs={12} className='py-1 global_cursor mx-0 px-0'>
                                <LinkContainer to={`/maintenance`}>
                                    <Zoom>
                                        <Button className=' global_goldenrodtxtborder-btn'>
                                            Learn More
                                        </Button>
                                    </Zoom>
                                </LinkContainer>
                            </Col>

                        </Col>

                        <Col md={4} className='pt-5 d-none d-md-block global_black-bg global_white mx-0 px-0'>
                            <LinkContainer to={`/mechanics`}>
                                <Col xs={12}
                                     className='AvionicsHome_titles global_cursor Mechanics_col d-flex align-items-end justify-content-center global_goldenrodtxtborder-btn'>
                                    <Zoom>
                                        <p className='Avionics_text-titles'>Annual Inspections</p>
                                    </Zoom>
                                </Col>
                            </LinkContainer>

                            <LinkContainer to={`/mechanics`}>
                                <Col xs={12}
                                     className='AvionicsHome_titles global_cursor Mechanics_col d-flex align-items-center justify-content-center global_goldenrodtxtborder-btn'>
                                    <Zoom>
                                        <p className='Avionics_text-titles'>Propeller Balance</p>
                                    </Zoom>
                                </Col>
                            </LinkContainer>

                            <LinkContainer to={`/mechanics`}>
                                <Col xs={12}
                                     className='AvionicsHome_titles global_cursor Mechanics_col d-flex align-items-start justify-content-center global_goldenrodtxtborder-btn'>
                                    <Zoom>
                                        <p className='Avionics_text-titles'> Pre-Buy Inspections</p>
                                    </Zoom>
                                </Col>
                            </LinkContainer>

                        </Col>
                    </Row>

                    <Row className='d-flex justify-content-between mb-5 p-0'>
                        <Col md={4} xs={12} className='d-flex justify-content-center pl-0 m-0'>
                            <Card className='Avionics_card border-0 bg-transparent rounded'>
                                <Card.Img variant="top" src={img1} className=' Avionics_card-img h-100 w-100'/>
                            </Card>
                        </Col>

                        <Col md={4} xs={12} className='d-flex justify-content-center p-0 m-0'>
                            <Card className='Avionics_card border-0 bg-transparent rounded'>
                                <Card.Img variant="top" src={img2} className='Avionics_card-img h-100 w-100'/>
                            </Card>
                        </Col>

                        <Col md={4} xs={12} className='d-flex justify-content-center pr-0 m-0'>
                            <Card className='Avionics_card border-0 bg-transparent rounded'>
                                <Card.Img variant="top" src={img3} className='Avionics_card-img h-100 w-100'/>
                            </Card>
                        </Col>
                    </Row>

                </Col>
            </Row>


        </>

    )
};

export default HomeMaintenance

