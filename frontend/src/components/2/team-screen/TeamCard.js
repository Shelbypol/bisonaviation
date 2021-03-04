import React, {useState} from 'react';

import {Accordion, Card, Button, Row, Col, Container} from "react-bootstrap";
import {Jumbotron} from "reactstrap";

const TeamCard = (props) => {


    return (

        <>
            <Jumbotron className='mx-auto bg-transparent border'
                       fluid>

            <Row className='px-auto'>
                <Col xs={3} >
                    {/*//ACCORDIAN CARD START*/}
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    John D. Atkin IV, ATP / MEII
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">

                                <Card.Body>
                                    <Jumbotron className='mx-auto bg-transparent border'
                                               fluid>
                                        <Row>
                                            <Col xs={6}>
                                                <Card.Img variant="top" src="holder.js/100px180" />
                                            </Col>
                                            <Col xs={12}>
                                                {/*MEMBER NAME*/}
                                                John D. Atkin IV, ATP / MEII
                                            </Col>
                                            <Col xs={12}>
                                                {/*POSITION*/}
                                                President
                                            </Col>
                                            <Col xs={12}>
                                                {/*CERTIFICATIONS*/}
                                                President
                                            </Col>
                                                <Col xs={12}>
                                                {/*CERTIFICATIONS*/}
                                                President
                                            </Col>

                                        </Row>

                                    </Jumbotron>




                                </Card.Body>




                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    {/*//    ACCORDIAN CARD END*/}
                </Col>
                <Col xs={3}>
                    {/*//ACCORDIAN CARD START*/}
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Click me!
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    {/*//    ACCORDIAN CARD END*/}
                </Col>
                <Col xs={3}>
                    {/*//ACCORDIAN CARD START*/}
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Click me!
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    {/*//    ACCORDIAN CARD END*/}
                </Col>
                <Col xs={3}>
                    {/*//ACCORDIAN CARD START*/}
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Click me!
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    {/*//    ACCORDIAN CARD END*/}
                </Col>
            </Row>


            </Jumbotron>

        </>
    );
};

export default TeamCard;