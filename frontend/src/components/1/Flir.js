import React from 'react';
import {Jumbotron, Row, Col} from 'reactstrap';
import Zoom from 'react-reveal/Zoom'
import '../../style/1/Flir.css'
import flir1 from "../../images/bg-graphics/flir/flir-1.jpg"
import flir2 from "../../images/bg-graphics/flir/large-flir.jpg"
import flir3 from "../../images/bg-graphics/flir/flir-multiple.jpg"


const Flir = () => {
    return (

        <Jumbotron className='m-0 py-5 global_light-grey-bg Flir_shadow' fluid>

            <Row>
                <Col xs={3}>
                    <Zoom>
                        <h1 className='Flir_title global_title ml-5'>
                            <span className='global_title-letter mr-n1'>E</span>O /IR <br/> Flir
                        </h1>
                    </Zoom>
                </Col>

                <Col xs={9} className=' px-5'>
                    <Zoom>
                        <p className='py-1 text-center Flir_highlight-font global_light-grey-bg global_blood-red'>Flight-ready
                            systems &nbsp; &nbsp;&nbsp;  LRUs &nbsp;&nbsp;  &nbsp; Mounting kits &nbsp;&nbsp; &nbsp; ISR mission support</p>
                    </Zoom>
                    <p className='Flir_font'>Bison Aviation maintains the <span className='Flir_span-font global_blood-red'>world's largest in-house inventory of legacy airborne EO/IR
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

            <Row className='mt-4'>
                <Col xs={4} className='d-flex justify-content-center'>
                    <Zoom>
                        <img src={flir1} alt="" className='Flir_img-shadow h-75 w-50 rounded-left'/>
                    </Zoom>
                </Col>
                <Col xs={4} className='d-flex justify-content-center'>
                    <Zoom>
                        <img src={flir2} alt="" className='Flir_img-shadow h-75 w-50'/>
                    </Zoom>
                </Col>
                <Col xs={4} className='d-flex justify-content-center'>
                    <Zoom>
                        <img src={flir3} alt="" className='Flir_img-shadow h-75 w-50 rounded-right'/>
                    </Zoom>
                </Col>
            </Row>

        </Jumbotron>

    )
};

export default Flir