import React from 'react';
import {Jumbotron, Row, Col} from 'reactstrap';
import Zoom from 'react-reveal/Zoom'
import '../../style/1/Flir.css'
import JumboCardImgAndText from "../JumboCardImgAndText";
import flir from "../../images/bg-graphics/flir/flir-1.jpg"
import {Container} from "react-bootstrap";

const Flir = () => {
    return (

        <>
            <Jumbotron className='my-5 global_cultured ' fluid>
                <Row>
                    <Col xs={2} className='Flir_row-bg-1 Flir_shadow'> </Col>
                    <Col xs={2} className='Flir_row-bg-2 Flir_shadow'> </Col>
                    <Col xs={2} className='Flir_row-bg-3 Flir_shadow'> </Col>
                    <Col xs={2} className='Flir_row-bg-4 Flir_shadow'> </Col>
                    <Col xs={2} className='Flir_row-bg-5 Flir_shadow'> </Col>
                    <Col xs={2} className='Flir_row-bg-6 Flir_shadow'> </Col>


                </Row>
            </Jumbotron>

            <Jumbotron className='mb-0 px-0 pt-0 pb-4 global_eerie-black-bg Flir_shadow' fluid>

                <Row>
                    <Col xs={8}>
                        <Row>
                            <Col xs={12}>
                                <Zoom>
                                    <h1 className='global_title global_cultured  ml-5'>
                                        <span className='global_title-letter mr-n1'>E</span>O /IR Flir
                                    </h1>
                                </Zoom>
                            </Col>
                            <Col xs={12} className='global_cultured px-5'>
                                <Zoom>
                                    <p className=' px-3 py-1 lighter Flir_font global_light-grey-bg global_blood-red'>Flight-ready
                                        systems | LRUs | Mounting its | ISR mission support</p>
                                </Zoom>
                            </Col>
                            <Col xs={12} className='global_cultured px-5'>
                                <p className='Flir_font'>Bison Aviation maintains the <span className='Flir_span-font '>world's largest in-house inventory of legacy airborne EO/IR
                                and FLIR equipment and parts.</span> Our system inventory includes units from FLIR
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
                        </Row>
                    </Col>

                    <Col xs={4}>
                        <img src={flir} alt="" className='h-100 w-100'/>
                    </Col>

                </Row>

            </Jumbotron>
        </>
    )
};

export default Flir