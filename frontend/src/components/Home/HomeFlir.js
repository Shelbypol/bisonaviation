import React from 'react';
import {Row, Col} from 'reactstrap';
import Zoom from 'react-reveal/Zoom'
import {Button, Card} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import flir from "../Flir/images/flir-sharp.png";
import flir1 from "../Flir/images/flirinventory.png";
import Fade from "react-reveal/Fade";


const HomeFlir = () => {
    return (
        <>

            <Row className='Global_Flir_bg-img global_cultured d-flex justify-content-center align-content-center'>
                <Col xs={12} style={{backgroundColor: 'rgba(0,0,0,.8)'}}>

                    <Row className='d-flex justify-content-start align-content-center ml-3 mb-5'>
                        <Fade top>
                            <Col xs={12}
                                 className=' AvionicsHome_title-col'>
                                <h1 className='AvionicsHome_title text-white'>EO/FLIR</h1>
                            </Col>
                        </Fade>
                    </Row>

                    <Row className='mb-5'>

                        <Col xs={7} className='' >
                            <Zoom>

                                <Col xs={12} className=' mr-2 px-4'>
                                    <h1 className='global_cultured'>
                                        Bison Aviation’s maintains the world’s largest inventory of legacy airborne
                                        EO/IR equipment.
                                    </h1>
                                </Col>
                            </Zoom>

                            <Col xs={12} className='global_cursor mr-5 px-4 mt-4'>
                                <Zoom>
                                    <p className='pr-3 py-3'>
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
                                        <Button className='pl-4 global_cultured global_black border-left' style={{backgroundColor: 'rgba(255,255,255,.1)'}}>
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
                                                      className='Avionics_card-img h-100 w-100'/>
                                            <Card.Img variant="top" src={flir1}
                                                      className='Avionics_card-img h-100 w-100 mt-2'/>
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

export default HomeFlir