import {Button, Col, Container, Row, Card} from "react-bootstrap";
import '../../style/1/Avionics.css';
import React from "react";
import {Jumbotron} from "reactstrap";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import AvionicsProducts from "./AvionicsProducts";
import Product from "../ProductDisplay/Product"
import ProductCarousel from "../ProductCarousel";
import {LinkContainer} from "react-router-bootstrap";
import ImgRow from "./ImgRow";
import AvionicsAd from "../avionics/AvionicsAd";
import ProductsDisplaySByCatMan from "../ProductDisplay/ProductDisplayByCatMan";


const Avionics = () => {

    return (
        <>

            <Jumbotron id='home-avionics' className='py-3 global_eerie-black-bg m-0'
                       fluid>
                {/*<Row>*/}
                {/*    <Col xs={5}> </Col>*/}
                {/*    <Col xs={7}>*/}
                {/*        <AvionicsProducts/>*/}
                {/*    </Col>*/}
                {/*</Row>*/}

            </Jumbotron>

            <Jumbotron id='home-avionics' className='Avionics_jumbo bg-white global_rich-black p-0 m-0'
                       fluid>

                <Row className='Avionics_jumbo-img pt-5'>
                    <Col xs={6} className=' p-0 m-0'>
                    </Col>


                    <Col xs={6} className=''>

                        <Row className=' mx-3 text-center'>
                            <h4 className='global_eerie-black'>
                                {/*FROM MINOR REPAIRS TO COMPLETE PANEL UPGRADES. ALL PERFORMED IN-HOUSE AT BISON AVIATION.*/}
                                From minor Repairs to complete panel updgrades. ALL SERVICES PERFROMED IN-HOUSE AT BISON
                                AVIATION.
                            </h4>
                        </Row>

                        <Row className='mb-3'>
                            <Col xs={12}>
                                <hr/>
                                <AvionicsProducts/>
                                <hr/>
                            </Col>
                        </Row>

                        <Row className=' Avionics_info'>
                            <Zoom>
                                <Col xs={1} className='d-flex justify-content-center mt-3'>
                                    <i className='far fa-tablet-alt global_blood-red'
                                       style={{fontSize: '2em'}}> </i>
                                </Col>
                                <Col xs={12} className=''>
                                    <h3 className='global_eerie-black'>Full / Partial Panel Upgrades</h3>
                                </Col>
                            </Zoom>

                        </Row>


                        <Row className='Avionics_info'>
                            <Zoom>
                                <Col xs={1} className='d-flex justify-content-center mt-3'>
                                    <i className='fal fa-tachometer-alt-fastest global_blood-red'
                                       style={{fontSize: '2em'}}> </i>
                                </Col>
                                <Col xs={12} className=''>
                                    <h3 className='global_eerie-black'>In-depth Tests & Checks</h3>
                                </Col>
                            </Zoom>

                        </Row>


                        <Row className='Avionics_info'>
                            <Zoom>
                                <Col xs={1} className='d-flex justify-content-center mt-3'>
                                    <i className='fal fa-database global_blood-red'
                                       style={{fontSize: '2em'}}> </i>
                                </Col>
                                <Col xs={12} className=''>
                                    <h3 className='global_eerie-black'>Software Updates</h3>
                                </Col>
                            </Zoom>
                        </Row>

                        <Row className='mt-3 ml-5 Avionics_info'>
                            <Zoom>
                                {/*<Col xs={1} className='d-flex justify-content-center mt-2'>*/}
                                {/*    <i className='far fa-tablet-rugged global_blood-red'*/}
                                {/*       style={{fontSize: '2em'}}> </i>*/}
                                {/*</Col>*/}
                                <Col xs={12} className='py-1 global_cursor'>
                                    <Fade right duration='1000'>
                                        <LinkContainer to={`/avionics`}>
                                            <h4 className='global_blood-red'>Learn More</h4>
                                        </LinkContainer>
                                    </Fade>
                                </Col>
                            </Zoom>
                        </Row>


                    </Col>


                </Row>
            </Jumbotron>

            {/*<Jumbotron id='home-avionics' className='Avionics_garmin-jumbo m-0 py-0 px-2 m-0'*/}
            {/*           fluid>*/}
            {/*    <AvionicsProducts/>*/}
            {/*</Jumbotron>*/}


            {/*<Jumbotron id='home-avionics' className='Avionics_card-jumbo global_blood-red-bg m-0 py-0 px-2'*/}
            {/*           fluid>*/}
            {/*    <Row>*/}
            {/*        <Col xs={3}>*/}
            {/*            <Card style={{width: '18rem'}} className='Avionics_img'>*/}
            {/*                <Card.Body>*/}
            {/*                    <Card.Title>Card Title</Card.Title>*/}
            {/*                    <Card.Text className='global_cultured global_eerie-black-bg'>*/}
            {/*                        Some quick example text to build on the card title and make up the bulk of*/}
            {/*                        the card's content.*/}
            {/*                    </Card.Text>*/}
            {/*                    <Button variant="primary">Go somewhere</Button>*/}
            {/*                </Card.Body>*/}
            {/*            </Card>*/}
            {/*        </Col>*/}
            {/*        <Col xs={3}>*/}
            {/*            <Card style={{width: '18rem'}}>*/}
            {/*                <Card.Body>*/}
            {/*                    <Card.Title>Card Title</Card.Title>*/}
            {/*                    <Card.Text>*/}
            {/*                        Some quick example text to build on the card title and make up the bulk of*/}
            {/*                        the card's content.*/}
            {/*                    </Card.Text>*/}
            {/*                    <Button variant="primary">Go somewhere</Button>*/}
            {/*                </Card.Body>*/}
            {/*            </Card>*/}
            {/*        </Col>*/}
            {/*        <Col xs={3}>*/}
            {/*            <Card style={{width: '18rem'}}>*/}
            {/*                <Card.Body>*/}
            {/*                    <Card.Title>Card Title</Card.Title>*/}
            {/*                    <Card.Text>*/}
            {/*                        Some quick example text to build on the card title and make up the bulk of*/}
            {/*                        the card's content.*/}
            {/*                    </Card.Text>*/}
            {/*                    <Button variant="primary">Go somewhere</Button>*/}
            {/*                </Card.Body>*/}
            {/*            </Card>*/}
            {/*        </Col>*/}
            {/*        <Col xs={3}>*/}
            {/*            <Card style={{width: '18rem'}}>*/}
            {/*                <Card.Body>*/}
            {/*                    <Card.Title>Card Title</Card.Title>*/}
            {/*                    <Card.Text>*/}
            {/*                        Some quick example text to build on the card title and make up the bulk of*/}
            {/*                        the card's content.*/}
            {/*                    </Card.Text>*/}
            {/*                    <Button variant="primary">Go somewhere</Button>*/}
            {/*                </Card.Body>*/}
            {/*            </Card>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</Jumbotron>*/}

            <Row className='Avionics_contact_img'>
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

export default Avionics
