import React, { useState } from 'react';

import {Accordion, Card, Button, Row, Col } from "react-bootstrap";

const TeamCard = (props) => {


    return (

        <>

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

            </>
    );
};

export default TeamCard;