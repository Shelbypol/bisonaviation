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