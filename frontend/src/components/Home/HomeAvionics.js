import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import './HomeAvionics.css';
import {LinkContainer} from "react-router-bootstrap";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import TenItemList from '../../components/TenItemList';

const HomeAvionics = () => {

    return (
        <>
            <Row className='d-flex justify-content-center align-content-center'>
                <Col xs={12} className='HomeAvionics_image p-0 mt-5 mb-0 mx-0 global_goldenrod-border-right'>

                    <Row className='d-flex align-items-center mr-0 my-0 py-0 ml-n1 HomeAvionics_title-row '>
                        <Col md={6} xs={12}
                             className='p-0 mx-0  mb-sm-5 mb-md-n2 global_goldenrod-border-right global_black-bg'>
                            <h2 className='HomeAvionics_title global_white text-center'>
                                <Fade top>
                                    Avionics
                                </Fade>
                            </h2>
                        </Col>
                    </Row>

                    <Row className='pb-0 px-2 pt-md-3 pt-sm-0 mx-n1 mb-n1 my-0 global_black-bg d-flex justify-content-between'>

                        <TenItemList
                            lg={6}
                            md={5}
                            xs={12}
                            link={`/avionics`}
                            item1={'Annual Inspections'}
                            item2={'Propeller Balance'}
                            item3={'Pre-Buy Inspections'}
                            item4={'Annual Inspections'}
                        />

                        {/*<Col lg={6} md={5} xs={12}*/}
                        {/*     className='mx-0 py-0 px-2 my-md-5 my-sm-0 global_goldenrod global_black-transparent global_goldenrod-border-left global_goldenrod-border-right'>*/}

                        {/*    <LinkContainer to={`/avionics`}>*/}
                        {/*        <Col xs={12}*/}
                        {/*             className='HomeAvionics_titles global_cursor global_goldenrodtxt-btn Mechanics_col d-flex align-items-center justify-content-center p-0 m-0'>*/}
                        {/*            <Zoom>*/}
                        {/*                <p className='HomeAvionics_text-titles'>Annual Inspections</p>*/}
                        {/*            </Zoom>*/}
                        {/*        </Col>*/}
                        {/*    </LinkContainer>*/}

                        {/*    <LinkContainer to={`/avionics`}>*/}
                        {/*        <Col xs={12}*/}
                        {/*             className='HomeAvionics_titles global_cursor global_goldenrodtxt-btn Mechanics_col d-flex align-items-center justify-content-center p-0 m-0'>*/}
                        {/*            <Zoom>*/}
                        {/*                <p className='HomeAvionics_text-titles'>Propeller Balance</p>*/}
                        {/*            </Zoom>*/}
                        {/*        </Col>*/}
                        {/*    </LinkContainer>*/}

                        {/*    <LinkContainer to={`/avionics`}>*/}
                        {/*        <Col xs={12}*/}
                        {/*             className='HomeAvionics_titles global_cursor global_goldenrodtxt-btn Mechanics_col d-flex align-items-center justify-content-center p-0 m-0'>*/}
                        {/*            <Zoom>*/}
                        {/*                <p className='HomeAvionics_text-titles'> Pre-Buy Inspections</p>*/}
                        {/*            </Zoom>*/}
                        {/*        </Col>*/}
                        {/*    </LinkContainer>*/}

                        {/*    <LinkContainer to={`/avionics`}>*/}
                        {/*        <Col xs={12}*/}
                        {/*             className='HomeAvionics_titles global_cursor global_goldenrodtxt-btn Mechanics_col d-flex align-items-center justify-content-center p-0 m-0'>*/}
                        {/*            <Zoom>*/}
                        {/*                <p className='HomeAvionics_text-titles'>Annual Inspections</p>*/}
                        {/*            </Zoom>*/}
                        {/*        </Col>*/}
                        {/*    </LinkContainer>*/}

                        {/*</Col>*/}

                        {/*MOBILE IMAGE*/}
                        <Col xs={11}
                             className='HomeAvionics_panel-img HomeAvionics_img mx-auto my-0 py-0 d-sm-block d-md-none'> </Col>


                        <Col lg={6} md={6} xs={12} className='mx-0 mt-auto'>
                            <Col xs={12} className='mb-2 pr-4 d-none d-md-block'>
                                <Zoom>
                                    <h1 className='global_white'>You depend on your aircraft to carry you and your
                                        passengers safely.</h1>
                                </Zoom>
                            </Col>

                            <Col xs={12} className='global_cursor mt-4 text-center text-md-left'>
                                <Zoom>
                                    <p className='pr-3 global_white'>
                                        Whether you need to add ADS-B OUT capabilities in order to meet the December
                                        31,
                                        2019 deadline, a routine pitot-static / transponder certification, or it's
                                        time
                                        for a completely new panel, Bison Aviation's Avionics Team is ready to bring
                                        your avionics systems into the 21st century!
                                    </p>
                                </Zoom>
                            </Col>

                            <Col xs={10} md={12} className='global_cursor mb-5 py-2 mx-auto d-flex justify-content-center global_dark-bg-btn'>
                                <LinkContainer to={`/avionics`}>
                                    <Button className=' text-center'>
                                            LEARN MORE
                                    </Button>
                                </LinkContainer>
                            </Col>
                        </Col>
                    </Row>
                </Col>

                <Col xs={10}
                     className='HomeAvionics_tayseer-img HomeAvionics_img mx-auto mb-5 mt-0 py-0 d-sm-block d-md-none'> </Col>

                <Col xs={12}
                     className='HomeAvionics_panel-img HomeAvionics_img d-none d-md-block global_goldenrod-border-right'> </Col>


            </Row>
        </>

    )
};

export default HomeAvionics