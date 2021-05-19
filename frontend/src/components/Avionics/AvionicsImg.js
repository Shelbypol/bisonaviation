import {Jumbotron} from "reactstrap";
import {Button, Card, Col, Row} from "react-bootstrap";
import GarminAd from "../GarminBanner/GarminAd";
import React from "react";
import Zoom from 'react-reveal/Zoom'


const AvionicsImg = () => {


    return (


        <>
            <Jumbotron id='home-avionics' className='global_cultured-bg global_rich-black p-0 m-0'
                       fluid>

                <Row className='d-flex align-items-center pb-5 pl-5'>

                    <Col xs={6}>
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

                                        {/*NESTED LIST*/}
                                        <Row className=''>
                                            <Col xs={6}>
                                                <Col xs={12} className=' mb-3'>
                                                    <Zoom>
                                                        <Col className=' '>
                                                            <p className=''>CNC machining</p>
                                                        </Col>
                                                    </Zoom>
                                                </Col>
                                            </Col>

                                            <Col xs={6}>
                                                <Col xs={12} className=''>
                                                    <Zoom>
                                                        <Col className=' '>
                                                            <p className='global_accentFont'>Laser engraving</p>
                                                        </Col>
                                                    </Zoom>
                                                </Col>
                                            </Col>
                                        </Row>


                                        <Row className=''>
                                            <Col xs={6}>
                                                <Col xs={12} className=''>
                                                    <Zoom>
                                                        <Col className=' '>
                                                            <p className='global_accentFont'>3D Printing</p>
                                                        </Col>
                                                    </Zoom>
                                                </Col>
                                            </Col>
                                            <Col xs={6}>
                                                <Col xs={12} className=''>
                                                    <Zoom>
                                                        <Col className=' '>
                                                            <p className='global_accentFont'>glass panel retrofits</p>
                                                        </Col>
                                                    </Zoom>
                                                </Col>
                                            </Col>
                                        </Row>

                                        <hr className='global_rich-black-bg'/>

                                    </Col>

                                </Row>
                            </Col>
                        </Row>


                        <Row className='mb-3'>
                            <Col xs={12}>
                                <Col xs={12}>
                                    <Zoom>
                                        <Col className='py-3'>
                                            <h4 className='global_eerie-black'>Tests, Checks & Repairs</h4>
                                        </Col>
                                    </Zoom>
                                </Col>
                                <Row xs={12}>
                                    <Col xs={2} className='d-flex justify-content-center mt-3'>
                                        <i className='far fa-headset global_blood-red' style={{fontSize: '3em'}}> </i>
                                    </Col>
                                    <Col xs={8}>

                                        {/*NESTED LIST*/}
                                        <Row>
                                            <Col xs={12}>
                                                <Col xs={12} className=' mb-3'>
                                                    <Zoom>
                                                        <Col className=' '>
                                                            <p className='global_accentFont'>Biennial 91.411 & 91.413
                                                                Recertification</p>
                                                        </Col>
                                                    </Zoom>
                                                </Col>
                                            </Col>

                                            <Col xs={12}>
                                                <Col xs={12} className=' mb-3'>
                                                    <Zoom>
                                                        <Col className=' '>
                                                            <p className='global_accentFont'>routine static system</p>
                                                        </Col>
                                                    </Zoom>
                                                </Col>
                                            </Col>

                                            <Col xs={12}>
                                                <Col xs={12} className=' mb-3'>
                                                    <Zoom>
                                                        <Col className=' '>
                                                            <p className='global_accentFont'>routine static system</p>
                                                        </Col>
                                                    </Zoom>
                                                    <hr className='global_rich-black-bg'/>
                                                </Col>
                                            </Col>

                                        </Row>
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


                    </Col>

                    <Col xs={6} className='global_light-grey-bg p-0 '>
                        <Row className='d-flex justify-content-center p-5'>
                            <Col xs={6} className='p-0'>
                                <Col xs={12} className='pr-2'>
                                    <Col xs={12} className='Avionics_img-1 '> </Col>
                                    <Col xs={12} className='Avionics_img-2 mt-2'> </Col>
                                </Col>
                            </Col>

                            <Col xs={6} className='pl-0 pr-2'>
                                <Col xs={12} className='p-0'>
                                    <Col xs={12} className='bg-transparent' style={{height: '150px'}}> </Col>
                                    <Col xs={12} className='Avionics_img-3 global_blood-red-bg my-2'> </Col>
                                    <Col xs={12} className='Avionics_img-4 global_light-grey-bg'> </Col>
                                </Col>
                            </Col>
                        </Row>
                    </Col>

                    <GarminAd/>

                </Row>
            </Jumbotron>


            <Jumbotron id='home-avionics' className='Avionics_card-jumbo global_blood-red-bg m-0 py-0 px-2'
                       fluid>
                <Row>
                    <Col xs={3}>
                        <Card style={{width: '18rem'}} className='Avionics_img'>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text className='global_cultured global_eerie-black-bg'>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={3}>
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={3}>
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={3}>
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Jumbotron>
        </>
    )
};

export default AvionicsImg
