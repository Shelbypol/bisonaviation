import React from 'react';
import {Jumbotron, Row, Col} from 'reactstrap';
import Zoom from 'react-reveal/Zoom'
import {Button, Card, Container} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import flir from "../../images/bg-graphics/screen-flir/flir-sharp.png";
import test from "../../images/bg-graphics/screen-avionics/avionics/avionics-test.jpg";
import tayseer from "../../images/bg-graphics/screen-avionics/avionics/tayseer-avionics.png";


const Flir = () => {
    return (
        <>

            <Row className='Mechanics_jumbo AvionicsHome_bg global_cultured px-0 pb-5 mt-n4 mx-0 pb-0'>
                <Col xs={12} className='px-2'>

                    <Col xs={12}
                         className=' AvionicsHome_title-col pb-5 d-flex justify-content-center align-content-center'>
                        <h1 className='AvionicsHome_title text-white'>EO/FLIR</h1>
                    </Col>

                    <Row className='pt-5'>

                        <Col xs={7} className=''>
                            <Zoom>

                                <Col xs={12} className='mb-2 mr-2 pr-4'>
                                    <h1 className='global_cultured'>
                                        Bison Aviation’s maintains the world’s largest inventory of legacy airborne
                                        EO/IR equipment.
                                    </h1>

                                </Col>
                            </Zoom>

                            <Col xs={12} className='global_cursor mr-5 pr-4 mt-4'>
                                <Zoom>
                                    <p className='pr-3 '>
                                        Bison Aviation’s Sensor Service team maintains an average of more than sixty
                                        flight-ready systems from manufacturers such as Wescam, FLIR Systems, Inc.,
                                        GyroCam, PolyTech, SweSystems, and more. Through significant investments in
                                        research and engineering, Bison Aviation has developed the tools and procedures
                                        necessary to repair & service nearly all makes and models of airborne equipment
                                        at the component level.

                                    </p>
                                </Zoom>
                            </Col>

                            <Col xs={12} className='py-1 global_cursor '>
                                <LinkContainer to={`/maintenance`}>
                                    <Zoom>
                                        <Button className='global_cultured global_blood-red-bg '>
                                            Learn More
                                        </Button>
                                    </Zoom>
                                </LinkContainer>
                            </Col>
                        </Col>


                        <Col xs={5} className='p-0 m-0 d-flex align-content-center'>
                            <LinkContainer to={`/mechanics`}>
                                <Col xs={12}
                                     className=' global_cursor d-flex align-items-center'>
                                    <Zoom>
                                        <Card className='Avionics_card border-0 bg-transparent rounded'>
                                            <Card.Img variant="top" src={flir}
                                                      className=' Avionics_card-img h-100 w-100'/>
                                        </Card>
                                    </Zoom>
                                </Col>
                            </LinkContainer>

                        </Col>
                    </Row>

                </Col>
            </Row>



        </>

    )
};

export default Flir