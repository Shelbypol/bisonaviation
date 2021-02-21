import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import '../../style/1/Mechanics.css';
import {Jumbotron} from "reactstrap";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {LinkContainer} from "react-router-bootstrap";
import AvionicsProducts from "./AvionicsProducts";


const Mechanics = () => {

    return (
        <>

            {/*<Jumbotron className='h-25 global_cultured-bg p-0 m-0'*/}
            {/*           fluid>*/}
            {/*</Jumbotron>*/}


            <Jumbotron id='home-avionics' className='py-4 global_rich-black-bg m-0'
                       fluid>

            </Jumbotron>

            <Jumbotron id='home-avionics' className='Mechanics_jumbo bg-white global_rich-black p-0 m-0'
                       fluid>

                <Row className=''>
                    <Col xs={5}> </Col>
                    <Col className='Mechanics_hero-img global_rich-black-bg'>
                    </Col>
                </Row>
            </Jumbotron>


            {/*=================================================================*/}

            {/*<Jumbotron className='Mechanics_bg_img p-0 m-0'*/}
            {/*           fluid>*/}
            {/*</Jumbotron>*/}

            <Row className='global_blood-red-bg Mechanics_row d-flex align-content-center'>
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

            <Row className='d-flex align-content-center ml-5 mt-5'>
                <Col xs={3} className='Mechanics_circle1 Mechanics_circles'>
                </Col>
                <Col xs={3} className='Mechanics_circle2 Mechanics_circles mt-2'>

                </Col>
                <Col xs={3} className='Mechanics_circle3 Mechanics_circles mt-2'>

                </Col>
                <Col xs={3} className='Mechanics_circle4 Mechanics_circles'>

                </Col>
            </Row>

            <Row className='d-flex align-content-center Mechanics_circle-text mx-1 mb-5'>
                <Col xs={3} className='mt-n5 pt-n5 text-center global_cursor'>
                    <Zoom>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto debitis eos magni,
                            porro
                            sed
                            voluptate.</p>
                    </Zoom>
                </Col>

                <Col xs={3} className='mt-n5 text-center global_cursor'>
                    <Zoom>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor et hic ipsam molestias
                            odio
                            quasi
                            quibusdam quidem sequi tempora, tenetur.</p>
                    </Zoom>
                </Col>

                <Col xs={3} className='mt-n5 text-center global_cursor'>
                    <Zoom>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dicta dolorum neque nihil
                            tempore.</p>
                    </Zoom>
                </Col>

                <Col xs={3} className='mt-n5 text-center global_cursor'>
                    <Zoom>
                        <Button className='global_blood-red global_cultured-bg Mechanics_btn'>Schedule your plane
                            today!</Button>
                    </Zoom>
                </Col>
            </Row>
            {/*=================================================================*/}


        </>

    )
};

export default Mechanics

