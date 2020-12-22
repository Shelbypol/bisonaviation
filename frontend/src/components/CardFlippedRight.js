import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import {Button, Col, Row, Container} from "react-bootstrap";
import hangar from '../images/general/hangar.png'
import CardFlippedLeft from "./CardFlippedLeft";

const CardFlippedRight = ({imgSrc, imgClassName, imgAlt, title, textIcon, btnIconVariant, btnBottomVariant, titleStyle, subTitle, text, btnIconStyle, btnBottomStyle, btnTitle}) => {
    return (

        // <Container>
        //     <Row xs={12}>
        //         <Col xs={4}>
        //             <img src={hangar} alt="" className='h-100 w-100'/>
        //         </Col>
        //         <Col xs={8}>
        //             <Row>
        //                 <Col md={12}>
        //                     <h1>WHY CHOOSE BISON AVIATION</h1>
        //                 </Col>
        //                 <Col md={12}>
        //                     <Row>
        //                         <Col xs={3}>
        //                             <i className="far fa-plane"> </i>
        //                         </Col>
        //                         <Col xs={9}>
        //                             <p className='text-muted'>AVIONICS & AIRCRAFT MAINTENANCE & FLIR</p>
        //
        //                         </Col>
        //                     </Row>
        //                 </Col>
        //                 <Col md={12}>
        //                         <p>'Bison Aviation is an FAA certificated Part 145 Repair Station serving the general aviation community. Founded by an avid general aviation pilot and fellow aircraft owner, we operate with the unique perspective of an organization which is intimately familiar not only with the world of professional aircraft maintenance, but also with the world of aircraft ownership and operation. We know that our customers rely on us to provide them with an honest and frank assessment of the condition of their aircraft, and we are honored to accept that charge.</p>
        //                 </Col>
        //             </Row>
        //         </Col>
        //     </Row>
        // </Container>
        <div className=''>
            <Card style={{zIndex: '1'}} className='d-inline-block w-100 border-0 cardStyle'>
                <CardBody className=' float-left textCard'>
                    <CardTitle tag="h1" className='font-weight-bold mb-4' style={{titleStyle}}>{title}</CardTitle>
                    <CardSubtitle tag="h6" className="text-muted mb-3">{subTitle}</CardSubtitle>
                    <hr/>
                    <Row>
                        <Col xs={1}>
                            <Button className='display-inline-block py-2 px-3 rounded-circle' style={{btnIconStyle}}
                                    variant={btnIconVariant}>{textIcon}</Button>
                        </Col>
                        <Col xs={11}>
                            <CardText className='display-inline-block ml-3' variant='danger'>{text}  </CardText>
                        </Col>

                    </Row>
                </CardBody>
                <CardImg height='100%' width='25%' className={imgClassName} src={imgSrc} alt={imgAlt}/>
            </Card>
        </div>
    );

};

export default CardFlippedRight;