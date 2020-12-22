import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';
import {Button, Row, Col, Container} from "react-bootstrap";
import hangar from "../images/general/hangar.png";

const CardFlippedLeft = ({imgSrc, imgClassName, imgAlt, title, textIcon, btnIconVariant, btnBottomVariant, titleStyle, subTitle, text, btnIconStyle, btnBottomStyle, btnTitle}) => {
    return (

        <Container>
            <Row xs={12}>
                <Col lg={4} xs={12}>
                    <img src={hangar} alt="" className='h-100 w-100'/>
                </Col>
                <Col lg={8} xs={12}>
                    <Row>
                        <Col md={12}>
                            <h1>WHY CHOOSE BISON AVIATION</h1>
                        </Col>
                        <Col md={12}>
                            <Row>
                                <Col xs={1}>
                                    <i className="far fa-plane bisonRedTxt" style={{fontSize: '1.8em'}}> </i>
                                </Col>
                                <Col xs={11}>
                                    <p className='text-muted mt-1 accentFont'>AVIONICS & AIRCRAFT MAINTENANCE & FLIR</p>

                                </Col>
                            </Row>
                        </Col>
                        <Col md={12}>
                            <p>Bison Aviation is an FAA certificated Part 145 Repair Station serving the general aviation community. Founded by an avid general aviation pilot and fellow aircraft owner, we operate with the unique perspective of an organization which is intimately familiar not only with the world of professional aircraft maintenance, but also with the world of aircraft ownership and operation. We know that our customers rely on us to provide them with an honest and frank assessment of the condition of their aircraft, and we are honored to accept that charge.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default CardFlippedLeft;