import {Button, Col, Container, Row} from "react-bootstrap";
import '../../style/1/Avionics.css';
import React from "react";
import {Jumbotron} from "reactstrap";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import AvionicsProducts from "./AvionicsProducts";
import ProductCarousel from "../ProductCarousel";
import {LinkContainer} from "react-router-bootstrap";
import ImgRow from "./ImgRow";


const Avionics = () => {

    return (
        <>
            <Jumbotron id='home-avionics' className='Avionics_jumbo bg-white global_rich-black p-0 m-0'
                       fluid>

                <Row className='Avionics_jumbo-img d-flex align-items-center m-0 p-0'>


                    <Col xs={9} className=' global_cultured-bg p-0 m-0 '>
                        {/*<Row className='d-flex justify-content-center p-5'>*/}

{/*<Col className='Avionics_jumbo-img ml-n5 border'>  </Col>*/}




                        {/*</Row>*/}
                    </Col>


                    <Col xs={3}>

                        <Row className='mb-3'>
                            <Col xs={12}>
                                <Col xs={12}>
                                    <Zoom>
                                        <Col className='py-3'>
                                            <h4 className='global_eerie-black'>Panel Upgrades</h4>
                                        </Col>
                                    </Zoom>
                                </Col>
                                <Row xs={12}>
                                    <Col xs={2} className='d-flex justify-content-center mt-3'>
                                        <i className='far fa-tablet-rugged global_blood-red'
                                           style={{fontSize: '3em'}}> </i>
                                    </Col>
                                    <Col xs={8}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
                                            repellat.</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                        <Row className='mb-3'>
                            <Col xs={12}>
                                <Col xs={12}>
                                    <Zoom>
                                        <Col className='py-3'>
                                            <h4 className='global_eerie-black'>Test & Checks</h4>
                                        </Col>
                                    </Zoom>
                                </Col>
                                <Row xs={12}>
                                    <Col xs={2} className='d-flex justify-content-center mt-3'>
                                        <i className='far fa-tablet-rugged global_blood-red'
                                           style={{fontSize: '3em'}}> </i>
                                    </Col>
                                    <Col xs={8}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
                                            repellat.</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                        <Row className='mb-3'>
                            <Col xs={12}>
                                <Col xs={12}>
                                    <Zoom>
                                        <Col className='py-3'>
                                            <h4 className='global_eerie-black'>Software Updates</h4>
                                        </Col>
                                    </Zoom>
                                </Col>
                                <Row xs={12}>
                                    <Col xs={2} className='d-flex justify-content-center mt-3'>
                                        <i className='far fa-tablet-rugged global_blood-red'
                                           style={{fontSize: '3em'}}> </i>
                                    </Col>
                                    <Col xs={8}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
                                            repellat.</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>


                        <Row className='mb-3'>
                            <Col xs={12}>
                                <Col xs={12}>
                                    <Zoom>
                                        <Col className='py-3'>
                                            <h4 className='global_eerie-black'>General Repairs</h4>
                                        </Col>
                                    </Zoom>
                                </Col>
                                <Row xs={12}>
                                    <Col xs={2} className='d-flex justify-content-center mt-3'>
                                        <i className='far fa-tablet-rugged global_blood-red'
                                           style={{fontSize: '3em'}}> </i>
                                    </Col>
                                    <Col xs={8}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
                                            repellat.</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </Col>

                    {/*<Col xs={6} className='global_cultured-bg p-0 '>*/}
                    {/*    <Row className='d-flex justify-content-center p-5'>*/}
                    {/*        <Col xs={6} className='p-0 '>*/}
                    {/*            <Col xs={12} className='p-0'>*/}
                    {/*                <Col xs={12} className='Avionics_img-1'> </Col>*/}
                    {/*                /!*<Col xs={12} className='global_blood-red-bg my-2' style={{height: '25px', width: '350px'}}> </Col>*!/*/}
                    {/*                <Col xs={12} className='Avionics_img-2 mt-2'> </Col>*/}
                    {/*            </Col>*/}
                    {/*        </Col>*/}

                    {/*        <Col xs={6} className='p-0'>*/}
                    {/*            <Col xs={12} className='p-0'>*/}
                    {/*                /!*<Col xs={12} className='global_blood-red-bg my-2' style={{height: '25px', width: '350px'}}> </Col>*!/*/}
                    {/*                <Col xs={12} className='Avionics_img-2 '> </Col>*/}
                    {/*                /!*<Col xs={12} className='global_blood-red-bg mt-n3 ' style={{height: '25px', width: '350px'}}> </Col>*!/*/}
                    {/*                <Col xs={12} className='Avionics_img-4 mt-2'> </Col>*/}
                    {/*            </Col>*/}
                    {/*        </Col>*/}
                    {/*    </Row>*/}
                    {/*</Col>*/}

                    <AvionicsProducts/>

                </Row>
            </Jumbotron>

            {/*<AvionicsProducts/>*/}
        </>

    )
};

export default Avionics
