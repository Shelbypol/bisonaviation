import React, {useState} from 'react';

import {Accordion, Card, Button, Row, Col, Container} from "react-bootstrap";
import {Jumbotron} from "reactstrap";

const TeamCard = ({img, headerName, headerPosition, name, position, certifications, locations, specialTraining, bio, favAircraft, eventKey}) => {

    const [show, setShow] = useState(false);

    const cardShow = () => {
        setShow(!show);
    };


    return (

        <>

            {/*<Row xs={12} className='px-auto'>*/}
                <Col xs={3} className=''>

                    <Card className='bg-transparent no-border' onClick={cardShow}>
                        <Card.Img variant="top" src={img} className='rounded'/>
                        <Card.Header className='global_cultured'>
                            {headerName}
                            <br/>
                            {headerPosition}
                        </Card.Header>

                    </Card>

                </Col>
            {/*</Row>*/}


            {show && (

                    // <Col className='col-sm-12 p-0 m-0'>
                        <Row xs={12} className='border'>
                            <Col xs={6}>
                                <Card.Img variant="top" src={img} className='w-75 h-100'/>
                            </Col>
                            <Col xs={6} className='bg-transparent global_cultured'>
                                <Col xs={12}>
                                    {/*MEMBER NAME*/}
                                    <strong className='Team_underline ' style={{color: 'red'}}> TEAM MEMBER:</strong>
                                    &nbsp;
                                    {name}
                                    {}
                                </Col>
                                <Col xs={12}>
                                    {/*POSITION*/}
                                    <strong className='Team_blue Team_underline '>POSITION:</strong>
                                    &nbsp;
                                    {position}
                                </Col>
                                <Col xs={12}>
                                    {/*CERTIFICATIONS*/}
                                    <strong className='Team_blue Team_underline '>CERTIFICATION/s:</strong>
                                    <br/>
                                    {certifications}
                                </Col>
                                <Col xs={12}>
                                    {/*LOCATION*/}
                                    <strong className='Team_blue Team_underline '>LOCATION:</strong>
                                    &nbsp;
                                    {locations}
                                </Col>
                                <Col xs={12}>
                                    {/*SPECIAL TRAINING*/}
                                    <strong className='Team_blue Team_underline '> SPECIAL TRAINING:</strong>
                                    <br/>
                                    {specialTraining}
                                </Col>
                                <Col xs={12}>
                                    {/*BIO*/}
                                    <strong className='Team_blue Team_underline '>BIO:</strong>
                                    <br/>
                                    {bio}
                                </Col>
                                <Col xs={12}>
                                    {/*BIO*/}
                                    <strong className='Team_blue Team_underline '>Favorite Aircraft to
                                        Maintain:</strong>
                                    <br/>
                                    {favAircraft}
                                </Col>
                            </Col>
                        </Row>
                    // </Col>
            )}


        </>
    );
};

export default TeamCard;