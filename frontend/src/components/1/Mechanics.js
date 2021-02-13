import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import '../../style/1/Mechanics.css';
import {Jumbotron} from "reactstrap";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {LinkContainer} from "react-router-bootstrap";


const Mechanics = () => {

    return (
        <>
            <Jumbotron className='Mechanics_bg_img global_light-grey-bg global_eerie-black p-0 m-0'
                       fluid>
            </Jumbotron>
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

            <Row className='d-flex align-content-center Mechanics_circle-text mx-1'>
                <Col xs={3} className='mt-n5 pt-n5 text-center'>
                    <Zoom>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto debitis eos magni, porro
                            sed
                            voluptate.</p>
                    </Zoom>
                </Col>

                <Col xs={3} className='mt-n5 text-center'>
                    <Zoom>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor et hic ipsam molestias odio
                            quasi
                            quibusdam quidem sequi tempora, tenetur.</p>
                    </Zoom>
                </Col>

                <Col xs={3} className='mt-n5 text-center'>
                    <Zoom>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dicta dolorum neque nihil
                            tempore.</p>
                    </Zoom>
                </Col>

                <Col xs={3} className='mt-n5 text-center'>
                    <Zoom>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur expedita placeat
                            repellat!</p>
                    </Zoom>
                </Col>
            </Row>

        </>

    )
};

export default Mechanics

