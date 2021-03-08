import React, {useState} from 'react';
import Fade from 'react-reveal/Fade';
import {Card, Row, Col, Accordion, Button} from "react-bootstrap";

const TeamCard = ({img, headerName, headerPosition, name, position, certifications, locations, specialTraining, bio, favAircraft, eventKey}) => {

    const [show, setShow] = useState(false);

    const cardShow = () => {
        if (show) {
            setShow(!show)
        } else if (!show) {
            setShow(!show)
        }
    };

    return (

        <>
            <Col sm={1} md={3}>
                <Card className='bg-transparent border-0' onClick={cardShow}>
                    <Card.Img src={img} className='rounded'/>
                    <Card.Header
                        className='global_cultured global_rich-black-bg text-center d-flex justify-content-center align-items-center'
                        style={{height: '15vh'}}>
                        {headerName}
                        <br/>
                        {headerPosition}
                    </Card.Header>
                </Card>
            </Col>

            {show && (
                <>
                    <Fade duration={4000}>
                        <Col className='col-sm-12 my-3'>
                            <Row xs={12}>
                                <Col xs={6}>
                                    <Card.Img variant="top" src={img} className='w-75 h-100'/>
                                </Col>
                                <Col xs={6} className='bg-transparent global_cultured'>
                                    <Col xs={12}>
                                        {/*MEMBER NAME*/}
                                        <strong className='Team_underline ' style={{color: 'red'}}> TEAM
                                            MEMBER:</strong>
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
                                        <strong className='Team_blue Team_underline '> SPECIAL
                                            TRAINING:</strong>
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
                        </Col>
                    </Fade>
                </>
            )}

            {/*<Col sm={1} md={3}>*/}
            {/*    <Card className='bg-transparent border-0' onClick={cardShow}>*/}
            {/*        <Card.Img src={img} className='rounded'/>*/}
            {/*        <Card.Header*/}
            {/*            className='global_cultured global_rich-black-bg text-center d-flex justify-content-center align-items-center'*/}
            {/*            style={{height: '15vh'}}>*/}
            {/*            {headerName}*/}
            {/*            <br/>*/}
            {/*            {headerPosition}*/}
            {/*        </Card.Header>*/}
            {/*    </Card>*/}
            {/*</Col>*/}


            {/*<Row>*/}
            {/*    {show && (*/}
            {/*        <>*/}
            {/*            <Fade duration={4000}>*/}
            {/*                <Col className='col-sm-12 my-3'>*/}
            {/*                    <Row xs={12}>*/}
            {/*                        <Col xs={6}>*/}
            {/*                            <Card.Img variant="top" src={img} className='w-75 h-100'/>*/}
            {/*                        </Col>*/}
            {/*                        <Col xs={6} className='bg-transparent global_cultured'>*/}
            {/*                            <Col xs={12}>*/}
            {/*                                /!*MEMBER NAME*!/*/}
            {/*                                <strong className='Team_underline ' style={{color: 'red'}}> TEAM*/}
            {/*                                    MEMBER:</strong>*/}
            {/*                                &nbsp;*/}
            {/*                                {name}*/}
            {/*                                {}*/}
            {/*                            </Col>*/}
            {/*                            <Col xs={12}>*/}
            {/*                                /!*POSITION*!/*/}
            {/*                                <strong className='Team_blue Team_underline '>POSITION:</strong>*/}
            {/*                                &nbsp;*/}
            {/*                                {position}*/}
            {/*                            </Col>*/}
            {/*                            <Col xs={12}>*/}
            {/*                                /!*CERTIFICATIONS*!/*/}
            {/*                                <strong className='Team_blue Team_underline '>CERTIFICATION/s:</strong>*/}
            {/*                                <br/>*/}
            {/*                                {certifications}*/}
            {/*                            </Col>*/}
            {/*                            <Col xs={12}>*/}
            {/*                                /!*LOCATION*!/*/}
            {/*                                <strong className='Team_blue Team_underline '>LOCATION:</strong>*/}
            {/*                                &nbsp;*/}
            {/*                                {locations}*/}
            {/*                            </Col>*/}
            {/*                            <Col xs={12}>*/}
            {/*                                /!*SPECIAL TRAINING*!/*/}
            {/*                                <strong className='Team_blue Team_underline '> SPECIAL*/}
            {/*                                    TRAINING:</strong>*/}
            {/*                                <br/>*/}
            {/*                                {specialTraining}*/}
            {/*                            </Col>*/}
            {/*                            <Col xs={12}>*/}
            {/*                                /!*BIO*!/*/}
            {/*                                <strong className='Team_blue Team_underline '>BIO:</strong>*/}
            {/*                                <br/>*/}
            {/*                                {bio}*/}
            {/*                            </Col>*/}
            {/*                            <Col xs={12}>*/}
            {/*                                /!*BIO*!/*/}
            {/*                                <strong className='Team_blue Team_underline '>Favorite Aircraft to*/}
            {/*                                    Maintain:</strong>*/}
            {/*                                <br/>*/}
            {/*                                {favAircraft}*/}
            {/*                            </Col>*/}
            {/*                        </Col>*/}
            {/*                    </Row>*/}
            {/*                </Col>*/}
            {/*            </Fade>*/}
            {/*        </>*/}
            {/*    )}*/}
            {/*</Row>*/}
        </>
    );
};

export default TeamCard;