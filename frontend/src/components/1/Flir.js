import React from 'react';
import {Jumbotron, Row, Col} from 'reactstrap';
import Zoom from 'react-reveal/Zoom'
import '../../style/1/Flir.css'
import flir1 from "../../images/bg-graphics/flir/flir-1.jpg"
import flir2 from "../../images/bg-graphics/flir/large-flir.jpg"
import flir3 from "../../images/bg-graphics/flir/flir-multiple.jpg"
import {Button, Container} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import Fade from "react-reveal/Fade";
import AvionicsProducts from "./AvionicsProducts";


const Flir = () => {
    return (
        <>

            <Jumbotron id='home-avionics' className='py-4 global_rich-black-bg m-0'
                       fluid>

            </Jumbotron>

            <Jumbotron id='home-avionics' className='Avionics_jumbo bg-white global_rich-black p-0 m-0'
                       fluid>

                <Row className='Flir_jumbo-img pt-5'>
                    <Col xs={6} className=' p-0 m-0'>
                    </Col>


                    <Col xs={6} className=''>

                        <Row className='Mechanics_margin-pos-top ml-5'>
                            <Zoom>

                                <Col xs={12} className='mb-2'>
                                    <h1 className='global_eerie-black '>You depend on your aircraft to carry you and your passengers safely.</h1>
                                </Col>
                            </Zoom>
                        </Row>

                        <Row className='ml-5 d-flex align-content-center Mechanics_margin-neg-top Mechanics_circle-text mb-0 p-0'>
                            {/*<Col xs={5} className='Mechanics_circle2 ml-5'>*/}
                            {/*</Col>*/}
                            <Col>
                                <h3> </h3>
                            </Col>
                            <Col xs={12} className='  global_cursor mt-4'>
                                <Zoom>
                                    <p>
                                        Whether it's time for a routine annual, a complete series of phase inspections or a pre-purchase inspection, Bison Aviation's team of FAA licensed technicians is ready to ensure that your aircraft is safe and airworthy for your next flight!

                                    </p>
                                </Zoom>
                            </Col>

                            <Col>

                            </Col>
                        </Row>



                        <Row className='mt-3 ml-5 Mechanics_info'>
                            <Zoom>
                                <Col xs={12} className='py-1 global_cursor'>
                                    <Fade right duration='1000'>
                                        <LinkContainer to={`/maintenance`}>
                                            <h4 className='Mechanics_learn-more-btn'>Learn More</h4>
                                        </LinkContainer>
                                    </Fade>
                                </Col>
                            </Zoom>
                        </Row>

                    </Col>



                {/*</Col>*/}
                </Row>
            </Jumbotron>
            <Row className='global_rich-black-bg Mechanics_row d-flex align-content-center'>
                <LinkContainer to={`/mechanics`}>
                    <Col xs={4} className='global_cursor border-right Mechanics_col d-flex align-items-center '>
                        <Zoom>
                            <p className='Mechanics_text'>Annual Inspections</p>
                        </Zoom>
                    </Col>
                </LinkContainer>

                <LinkContainer to={`/mechanics`}>
                    <Col xs={4} className='global_cursor border-right Mechanics_col d-flex align-items-center '>
                        <Zoom>
                            <p className='Mechanics_text'>Propeller Balance</p>
                        </Zoom>
                    </Col>
                </LinkContainer>

                <LinkContainer to={`/mechanics`}>
                    <Col xs={4} className='global_cursor Mechanics_col d-flex align-items-center '>
                        <Zoom>
                            <p className='Mechanics_text'> Pre-Buy Inspections</p>
                        </Zoom>
                    </Col>
                </LinkContainer>
            </Row>

            {/*<Container className='p-0 fluid'>*/}
            {/*    <Row className='pt-4'>*/}
            {/*        <Col xs={3}>*/}
            {/*            <Zoom>*/}
            {/*                <h1 className='Flir_title global_title ml-5'>*/}
            {/*                    <span className='global_title-letter mr-n1'>E</span>O /IR <br/> Flir*/}
            {/*                </h1>*/}
            {/*            </Zoom>*/}
            {/*            <Row className='text-center ml-5'>*/}
            {/*                <Zoom>*/}
            {/*                    <Col xs={12} className='py-1 global_blood-red Flir_highlight-font'>*/}
            {/*                        Flight-ready*/}
            {/*                    </Col>*/}
            {/*                </Zoom>*/}
            {/*                <Zoom>*/}
            {/*                    <Col xs={12} className='py-1 global_blood-red Flir_highlight-font'>*/}
            {/*                        LRUs*/}
            {/*                    </Col>*/}
            {/*                </Zoom>*/}

            {/*                <Zoom>*/}
            {/*                    <Col className='py-1 global_blood-red Flir_highlight-font'>*/}
            {/*                        Mounting kits*/}
            {/*                    </Col>*/}
            {/*                </Zoom>*/}
            {/*                <Zoom>*/}
            {/*                    <Col className=' py-1 global_blood-red Flir_highlight-font'>*/}
            {/*                        ISR mission support*/}
            {/*                    </Col>*/}
            {/*                </Zoom>*/}
            {/*                /!*</Col>*!/*/}
            {/*            </Row>*/}
            {/*        </Col>*/}

            {/*        <Col xs={6} className=' px-5 pt-5'>*/}
            {/*            <p className='Flir_font'>Bison Aviation maintains the*/}
            {/*                <span className='Flir_span-font global_blood-red'>*/}
            {/*                world's largest in-house inventory of legacy airborne EO/IR*/}
            {/*                    and FLIR equipment and parts.*/}
            {/*            </span>*/}
            {/*                Our system inventory includes units from FLIR*/}
            {/*                Systems,*/}
            {/*                Inc., L3 Wescam, Gyrocam, Polytech, and SweSystems. Our overhauled systems are*/}
            {/*                providing*/}
            {/*                reliable service at agencies throughout the United States in addition to countries*/}
            {/*                around the globe. From complete flight-ready systems, to major LRUs, mounting kits,*/}
            {/*                and*/}
            {/*                ISR mission support equipment, Bison Aviation is able to respond quickly to our*/}
            {/*                customer\'s airborne ISR system needs.*/}
            {/*            </p>*/}
            {/*        </Col>*/}
            {/*        /!*</Row>*!/*/}

            {/*        /!*<Row className='mt-4'>*!/*/}
            {/*        <Col xs={3}>*/}
            {/*            <Col className='d-flex justify-content-center py-2'>*/}
            {/*                <Zoom>*/}
            {/*                    <img src={flir1} alt="" className='Flir_img-shadow h-75 w-75 rounded-left'/>*/}
            {/*                </Zoom>*/}
            {/*            </Col>*/}
            {/*            <Col className='d-flex justify-content-center py-2'>*/}
            {/*                <Zoom>*/}
            {/*                    <img src={flir2} alt="" className='Flir_img-shadow h-75 w-75'/>*/}
            {/*                </Zoom>*/}
            {/*            </Col>*/}
            {/*            /!*<Col className='d-flex justify-content-center py-2'>*!/*/}
            {/*            /!*    <Zoom>*!/*/}
            {/*            /!*        <img src={flir3} alt="" className='Flir_img-shadow h-75 w-50 rounded-right'/>*!/*/}
            {/*            /!*    </Zoom>*!/*/}
            {/*            /!*</Col>*!/*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</Container>*/}


            <Row className='Avionics_contact_img m-0 p-0'>
                <Col xs={12} className='d-flex justify-content-end align-items-center'>
                    <LinkContainer to={`/contact`}>
                        <Fade right duration='1000'>
                            <Button className=' Avionics_contact-btn'>Book your appointment
                                today
                            </Button>
                        </Fade>
                    </LinkContainer>
                </Col>
            </Row>

        </>

    )
};

export default Flir