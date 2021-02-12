import {Button, Col, Container, Row} from "react-bootstrap";
import '../../style/1/Avionics.css';
import JumboCardImgs from "../JumboCardImgs";
import panel from "../../images/bg-graphics/avionics/avionics-bg.png";
import tayseerAvionics from "../../images/avionics/tayseer-avionics-1500.png";
import cncMachine from "../../images/avionics/cnc-machine.png";
import React from "react";
import {Jumbotron} from "reactstrap";
import jeff from '../../images/Jeff -Michael-1500.png'
import roel from '../../images/avionics/roelavionics.jpg'
import john from '../../images/avionics/john-panel.jpg'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import AvionicsProducts from "./AvionicsProducts";
import {LinkContainer} from "react-router-bootstrap";


const Avionics = () => {

    return (
        <>
            <Jumbotron id='home-avionics' className='Avionics_bg global_light-grey-bg global_eerie-black m-0'
                       fluid>

                <Col className='d-flex justify-content-center Avionics_title mt-n1 pt-5'>
                    <h1 className='global_title'><span className='global_title-letter mr-n2'>A</span>vionics</h1>
                </Col>
                <Row className='d-flex align-items-center'>
                    <Col xs={6}>
                        <Col className=' d-flex mb-4 mt-n3 ml-5 text-center'>
                            <p className='Avionics_text'>
                                Bison Aviation is proud to have a <span
                                className='global_blood-red bold' style={{fontSize: '25px'}}>full-time avionics team in-house.</span> While
                                many shops
                                “sub out” their avionics work, Bison Aviation maintains a full service avionics staff as
                                a part of our workforce.
                            </p>
                        </Col>

                        <Col className='mb-5 mt-3 ml-5'>
                            <AvionicsProducts/>
                        </Col>

                        <Col xs={12}>

                            <Zoom>
                                <Col className='d-flex Avionics_icon-box ml-5 mb-3'>
                                    <Col xs={2}
                                         className='Avionics_blood-red-opacity justify-content-center align-items-center d-flex global_blood-red rounded-circle Avionics_square'>
                                        <i className='fas fa-exchange global_cultured Avionics_icon'> </i>
                                    </Col>
                                    <Col xs={10} className='d-flex align-items-center'>
                                        <p className='mt-3 Avionics_icon-text'>30+ years of experience</p>
                                    </Col>
                                </Col>
                            </Zoom>

                            <Zoom>
                                <Col className='d-flex Avionics_icon-box ml-5 my-3'>
                                    <Col xs={2}
                                         className='Avionics_blood-red-opacity justify-content-center align-items-center d-flex global_blood-red rounded-circle Avionics_square'>
                                        <i className='far fa-window-restore global_cultured Avionics_icon text-center'> </i>
                                    </Col>
                                    <Col xs={10} className='d-flex align-items-center'>
                                        <p className='Avionics_icon-text'>Complete panel installations</p>
                                    </Col>
                                </Col>
                            </Zoom>

                            <Zoom>
                                <Col className='d-flex Avionics_icon-box ml-5 my-3'>
                                    <Col xs={2}
                                         className='Avionics_blood-red-opacity justify-content-center align-items-center d-flex global_blood-red rounded-circle Avionics_square'>
                                        <i className='fas fa-arrow-alt-circle-down global_cultured Avionics_icon'> </i>
                                    </Col>
                                    <Col xs={10} className='d-flex align-items-center'>
                                        <p className='Avionics_icon-text'>CNC panel fabrication</p>
                                    </Col>
                                </Col>
                            </Zoom>

                            <Zoom>
                                <Col className='d-flex Avionics_icon-box ml-5 my-3'>
                                    <Col xs={2}
                                         className='Avionics_blood-red-opacity justify-content-center align-items-center d-flex global_blood-red rounded-circle Avionics_square'>
                                        <i className='far fa-sword-laser global_cultured Avionics_icon text-center'> </i>
                                    </Col>
                                    <Col xs={10} className='d-flex align-items-center'>
                                        <p className='Avionics_icon-text'>Laser engraving </p>
                                    </Col>
                                </Col>
                            </Zoom>

                            <Zoom>
                                <Col className='d-flex Avionics_icon-box ml-5 my-3'>
                                    <Col xs={2}
                                         className='Avionics_blood-red-opacity justify-content-center align-items-center d-flex global_blood-red rounded-circle Avionics_square'>
                                        <i className='far fa-print global_cultured Avionics_icon text-center'> </i>
                                    </Col>
                                    <Col xs={10} className='d-flex align-items-center'>
                                        <p className='Avionics_icon-text'>3D printing </p>
                                    </Col>
                                </Col>
                            </Zoom>
                        </Col>
                    </Col>

                    <Col xs={6} className='Avionics_img'>

                        <JumboCardImgs
                            imgSrc1={tayseerAvionics}
                            imgSrc4={jeff}
                            imgSrc3={roel}
                            imgSrc2={cncMachine}
                        >
                        </JumboCardImgs>
                    </Col>

                </Row>

            </Jumbotron>
            <Row className='Avionics_contact_img'>
                <Col xs={12} className='d-flex justify-content-end align-items-center'>
                    <LinkContainer to={`/contact`}>
                        <Fade right duration='1000'>
                            <Button className=' Avionics_contact-btn'>Contact
                                us today
                            </Button>
                        </Fade>
                    </LinkContainer>
                </Col>
            </Row>
        </>

    )
};

export default Avionics