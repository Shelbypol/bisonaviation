import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import {Button, Col, Row} from "react-bootstrap";

const CardFlippedRight = ({imgSrc, imgClassName, imgAlt, title, textIcon, btnIconVariant, btnBottomVariant, titleStyle, subTitle, text, btnIconStyle, btnBottomStyle, btnTitle}) => {
    return (
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


// const CardFlippedLeft = ({ imgSrc, imgAlt ,title, subTitle, text, btnTitle }) => {
//     return (
//         <div className=''>
//             <Card style={{zIndex: '1'}} className='d-inline-block w-100 cardStyle border-0'>
//                 <CardBody className='float-left textCard '>
//                     <CardTitle tag="h4" className='font-weight-bold mb-4' style={{borderBottom: '5px solid darkred'}}>{title}</CardTitle>
//                     <CardSubtitle tag="h6" className="text-muted mb-3">{subTitle}</CardSubtitle>
//                     <CardText className=''>{text}</CardText>
//                     <Button className=''>{btnTitle}</Button>
//                 </CardBody>
//                 <CardImg height='100%' width='25%' className='img-fluid float-right imgCard' src={imgSrc} alt={imgAlt} />
//             </Card>
//         </div>
//     );
};

export default CardFlippedRight;