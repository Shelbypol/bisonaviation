import React from 'react';
import {Jumbotron, Row, Col} from 'reactstrap';
import Zoom from 'react-reveal/Zoom'
import '../../style/1/Flir.css'
import flir1 from "../../images/bg-graphics/flir/flir-1.jpg"
import flir2 from "../../images/bg-graphics/flir/large-flir.jpg"
import flir3 from "../../images/bg-graphics/flir/flir-multiple.jpg"
import {Container} from "react-bootstrap";


const Flir = () => {
    return (

        <Jumbotron className='m-0 py-5 global_light-grey-bg Flir_shadow' fluid>
            {/*<Container className='p-0 fluid'>*/}
                <Row className='pt-4'>
                    <Col xs={3}>
                        <Zoom>
                            <h1 className='Flir_title global_title ml-5'>
                                <span className='global_title-letter mr-n1'>E</span>O /IR <br/> Flir
                            </h1>
                        </Zoom>
                        <Row className='text-center ml-5'>
                            <Zoom>
                                <Col xs={12} className='py-1 global_blood-red Flir_highlight-font'>
                                    Flight-ready
                                </Col>
                            </Zoom>
                            <Zoom>
                                <Col xs={12} className='py-1 global_blood-red Flir_highlight-font'>
                                    LRUs
                                </Col>
                            </Zoom>

                            <Zoom>
                                <Col className='py-1 global_blood-red Flir_highlight-font'>
                                    Mounting kits
                                </Col>
                            </Zoom>
                            <Zoom>
                                <Col className=' py-1 global_blood-red Flir_highlight-font'>
                                    ISR mission support
                                </Col>
                            </Zoom>
                            {/*</Col>*/}
                        </Row>
                    </Col>

                    <Col xs={6} className=' px-5 pt-5'>
                        <p className='Flir_font'>Bison Aviation maintains the
                            <span className='Flir_span-font global_blood-red'>
                            world's largest in-house inventory of legacy airborne EO/IR
                                and FLIR equipment and parts.
                        </span>
                            Our system inventory includes units from FLIR
                            Systems,
                            Inc., L3 Wescam, Gyrocam, Polytech, and SweSystems. Our overhauled systems are
                            providing
                            reliable service at agencies throughout the United States in addition to countries
                            around the globe. From complete flight-ready systems, to major LRUs, mounting kits,
                            and
                            ISR mission support equipment, Bison Aviation is able to respond quickly to our
                            customer\'s airborne ISR system needs.
                        </p>
                    </Col>
                    {/*</Row>*/}

                    {/*<Row className='mt-4'>*/}
                    <Col xs={3}>
                        <Col className='d-flex justify-content-center py-2'>
                            <Zoom>
                                <img src={flir1} alt="" className='Flir_img-shadow h-75 w-75 rounded-left'/>
                            </Zoom>
                        </Col>
                        <Col className='d-flex justify-content-center py-2'>
                            <Zoom>
                                <img src={flir2} alt="" className='Flir_img-shadow h-75 w-75'/>
                            </Zoom>
                        </Col>
                        {/*<Col className='d-flex justify-content-center py-2'>*/}
                        {/*    <Zoom>*/}
                        {/*        <img src={flir3} alt="" className='Flir_img-shadow h-75 w-50 rounded-right'/>*/}
                        {/*    </Zoom>*/}
                        {/*</Col>*/}
                    </Col>
                </Row>
            {/*</Container>*/}

        </Jumbotron>

    )
};

export default Flir