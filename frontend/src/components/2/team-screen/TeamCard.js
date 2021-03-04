import React, {useState} from 'react';

import {Accordion, Card, Button, Row, Col, Container} from "react-bootstrap";
import {Jumbotron} from "reactstrap";

const TeamCard = ({img, name, position, certifications, locations, specialTraining, bio}) => {


    return (

        <>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <Card.Img variant="top" src={img}/>
                        <Card.Header>
                            John D. Atkin IV, ATP / MEII
                        </Card.Header>
                    </Accordion.Toggle>
                </Card>

                <Card.Body>
                    <Accordion.Collapse eventKey="0" className='border global_cultured-bg py-2'
                                        style={{width: '90vw'}}>
                        <Row>
                            <Col xs={6}>
                                <Card.Img variant="top" src={img}/>
                            </Col>
                            <Col xs={6}>
                                <Col xs={12}>
                                    {/*MEMBER NAME*/}
                                    <strong className='global_blood-red Team_underline '> TEAM MEMBER:</strong>
                                    &nbsp;
                                    {name}
                                </Col>
                                <Col xs={12}>
                                    {/*POSITION*/}
                                    <strong className='global_blood-red Team_underline '>POSITION:</strong>
                                    &nbsp;
                                    {position}
                                </Col>
                                <Col xs={12}>
                                    {/*CERTIFICATIONS*/}
                                    <strong className='global_blood-red Team_underline '>CERTIFICATION/s:</strong>
                                    <br/>
                                    {certifications}
                                </Col>
                                <Col xs={12}>
                                    {/*LOCATION*/}
                                    <strong className='global_blood-red Team_underline '>LOCATION:</strong>
                                    &nbsp;
                                    {locations}
                                </Col>
                                <Col xs={12}>
                                    {/*SPECIAL TRAINING*/}
                                    <strong className='global_blood-red Team_underline '> SPECIAL TRAINING:</strong>
                                    <br/>
                                    {specialTraining}
                                </Col>
                                <Col xs={12}>
                                    {/*BIO*/}
                                    <strong className='underline global_blood-red Team_underline '>BIO:</strong>
                                    <br/>
                                   {bio}
                                </Col>
                            </Col>

                        </Row>

                    </Accordion.Collapse>
                </Card.Body>

            </Accordion>


        </>
    );
};

export default TeamCard;